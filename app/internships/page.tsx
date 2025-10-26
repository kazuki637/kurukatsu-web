'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Filter, MapPin, Calendar, DollarSign, GraduationCap, Building2, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import InternCard from '@/components/internships/InternCard'
import InternFilters from '@/components/internships/InternFilters'

// ダミーデータ
const mockInternships = [
  {
    id: '1',
    title: 'Webアプリケーション開発エンジニア',
    company: 'テックイノベーション株式会社',
    logo: '/placeholder-company-1.jpg',
    jobType: 'エンジニア',
    location: '東京都渋谷区',
    duration: '3ヶ月',
    period: '2024年7月〜9月',
    salary: '時給1,500円〜2,000円',
    targetGrades: ['2年生', '3年生'],
    workStyle: 'ハイブリッド',
    description: 'React/Next.jsを使ったWebアプリケーション開発に参加していただきます。メンターがしっかりサポートするので未経験でも安心です。',
    tags: ['React', 'Next.js', 'TypeScript', 'AWS'],
    requirements: ['プログラミング経験（言語不問）', 'チーム開発への興味', '週3日以上参加可能'],
    benefits: ['実務経験が積める', 'メンター制度', '交通費支給', '優秀者は内定直結'],
    status: '募集中'
  },
  {
    id: '2',
    title: 'マーケティング・企画インターン',
    company: 'ブランドストラテジー株式会社',
    logo: '/placeholder-company-2.jpg',
    jobType: 'マーケティング',
    location: '東京都新宿区',
    duration: '6ヶ月',
    period: '2024年6月〜11月',
    salary: '時給1,200円〜1,800円',
    targetGrades: ['1年生', '2年生', '3年生'],
    workStyle: 'オフィス勤務',
    description: 'SNSマーケティング、コンテンツ企画、データ分析など幅広いマーケティング業務を経験できます。',
    tags: ['SNS運用', 'データ分析', 'コンテンツ企画', 'Adobe Creative Suite'],
    requirements: ['マーケティングへの興味', 'SNS利用経験', '基本的なPCスキル'],
    benefits: ['マーケティングスキル習得', '社員との交流', '昼食支給', '成果に応じて時給アップ'],
    status: '募集中'
  },
  {
    id: '3',
    title: 'UI/UXデザイナー',
    company: 'クリエイティブスタジオ株式会社',
    logo: '/placeholder-company-3.jpg',
    jobType: 'デザイナー',
    location: '大阪府大阪市',
    duration: '4ヶ月',
    period: '2024年8月〜11月',
    salary: '時給1,300円〜1,600円',
    targetGrades: ['2年生', '3年生', '4年生'],
    workStyle: 'リモート可',
    description: 'モバイルアプリのUI/UXデザインを手がけていただきます。デザイン思考からプロトタイプ制作まで一貫して学べます。',
    tags: ['Figma', 'Sketch', 'プロトタイピング', 'ユーザビリティテスト'],
    requirements: ['デザインツール使用経験', 'ポートフォリオ提出', 'デザインへの情熱'],
    benefits: ['実案件への参加', 'デザイナーとの1on1', 'ツール利用料支給', 'ポートフォリオ作成支援'],
    status: '募集中'
  },
  {
    id: '4',
    title: 'データサイエンス・AI開発',
    company: 'AIソリューションズ株式会社',
    logo: '/placeholder-company-4.jpg',
    jobType: 'データサイエンティスト',
    location: '東京都品川区',
    duration: '6ヶ月',
    period: '2024年7月〜12月',
    salary: '時給1,800円〜2,500円',
    targetGrades: ['3年生', '4年生'],
    workStyle: 'ハイブリッド',
    description: '機械学習モデルの開発、データ分析、AIプロダクトの改善に携わっていただきます。最新のAI技術を学べる環境です。',
    tags: ['Python', '機械学習', 'TensorFlow', 'データ分析', 'SQL'],
    requirements: ['Python使用経験', '統計学・数学の基礎知識', '週4日以上参加可能'],
    benefits: ['最新AI技術習得', '論文発表機会', '高時給', 'GPU環境提供'],
    status: '募集中'
  },
  {
    id: '5',
    title: '営業・ビジネス開発',
    company: 'グロースパートナーズ株式会社',
    logo: '/placeholder-company-5.jpg',
    jobType: '営業',
    location: '愛知県名古屋市',
    duration: '3ヶ月',
    period: '2024年9月〜11月',
    salary: '時給1,000円〜1,400円 + インセンティブ',
    targetGrades: ['2年生', '3年生'],
    workStyle: 'オフィス勤務',
    description: 'BtoBセールス、新規開拓、既存顧客フォローなど営業業務全般を経験できます。コミュニケーション力を鍛えたい方におすすめです。',
    tags: ['BtoBセールス', '新規開拓', '提案資料作成', 'CRM活用'],
    requirements: ['コミュニケーション能力', '積極性', '基本的なPCスキル'],
    benefits: ['営業スキル習得', 'インセンティブ制度', '社員研修参加', '成果次第で正社員登用'],
    status: '募集中'
  },
  {
    id: '6',
    title: 'コンテンツライター・編集',
    company: 'メディアクリエーション株式会社',
    logo: '/placeholder-company-6.jpg',
    jobType: 'ライター',
    location: '東京都渋谷区',
    duration: '4ヶ月',
    period: '2024年5月〜8月',
    salary: '時給1,100円〜1,500円',
    targetGrades: ['1年生', '2年生', '3年生', '4年生'],
    workStyle: 'リモート可',
    description: 'Webメディアの記事執筆、編集、SEO対策などコンテンツ制作全般に携わっていただきます。',
    tags: ['ライティング', 'SEO', 'WordPress', 'Google Analytics'],
    requirements: ['文章力', 'リサーチ能力', '納期管理能力'],
    benefits: ['ライティングスキル向上', '柔軟な勤務時間', 'SEO知識習得', '実名記事掲載可能'],
    status: '募集終了'
  }
]

const jobTypes = ['全て', 'エンジニア', 'デザイナー', 'マーケティング', 'データサイエンティスト', '営業', 'ライター', '企画', 'コンサルタント']
const locations = ['全て', '東京都', '大阪府', '愛知県', '神奈川県', '福岡県', 'リモート可']
const durations = ['全て', '1-2ヶ月', '3-4ヶ月', '5-6ヶ月', '6ヶ月以上']
const salaryRanges = ['全て', '1,000円未満', '1,000-1,500円', '1,500-2,000円', '2,000円以上']
const targetGrades = ['全て', '1年生', '2年生', '3年生', '4年生']
const statusOptions = ['全て', '募集中', '募集終了']

export default function InternshipsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedJobType, setSelectedJobType] = useState('全て')
  const [selectedLocation, setSelectedLocation] = useState('全て')
  const [selectedDuration, setSelectedDuration] = useState('全て')
  const [selectedSalary, setSelectedSalary] = useState('全て')
  const [selectedGrade, setSelectedGrade] = useState('全て')
  const [selectedStatus, setSelectedStatus] = useState('全て')
  const [filteredInternships, setFilteredInternships] = useState(mockInternships)

  // 検索・フィルタ機能
  const handleFilter = (query: string, jobType: string, location: string, duration: string, salary: string, grade: string, status: string) => {
    let filtered = mockInternships

    if (jobType !== '全て') {
      filtered = filtered.filter(intern => intern.jobType === jobType)
    }

    if (location !== '全て') {
      if (location === 'リモート可') {
        filtered = filtered.filter(intern => intern.workStyle.includes('リモート'))
      } else {
        filtered = filtered.filter(intern => intern.location.includes(location))
      }
    }

    if (duration !== '全て') {
      // 期間フィルタリング（簡略化）
      filtered = filtered.filter(intern => {
        const months = parseInt(intern.duration)
        switch (duration) {
          case '1-2ヶ月': return months <= 2
          case '3-4ヶ月': return months >= 3 && months <= 4
          case '5-6ヶ月': return months >= 5 && months <= 6
          case '6ヶ月以上': return months > 6
          default: return true
        }
      })
    }

    if (salary !== '全て') {
      // 給与フィルタリング（簡略化）
      filtered = filtered.filter(intern => {
        const salaryNumber = parseInt(intern.salary.match(/\d+/)?.[0] || '0')
        switch (salary) {
          case '1,000円未満': return salaryNumber < 1000
          case '1,000-1,500円': return salaryNumber >= 1000 && salaryNumber < 1500
          case '1,500-2,000円': return salaryNumber >= 1500 && salaryNumber < 2000
          case '2,000円以上': return salaryNumber >= 2000
          default: return true
        }
      })
    }

    if (grade !== '全て') {
      filtered = filtered.filter(intern => intern.targetGrades.includes(grade))
    }

    if (status !== '全て') {
      filtered = filtered.filter(intern => intern.status === status)
    }

    if (query) {
      filtered = filtered.filter(intern =>
        intern.title.toLowerCase().includes(query.toLowerCase()) ||
        intern.company.toLowerCase().includes(query.toLowerCase()) ||
        intern.description.toLowerCase().includes(query.toLowerCase()) ||
        intern.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
      )
    }

    setFilteredInternships(filtered)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヘーダーセクション */}
      <section className="gradient-bg text-white py-16">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              インターンシップ
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              実践的な経験を積み、キャリアを加速させるインターンシップ求人をご紹介します
            </p>
            
            {/* 統計情報 */}
            <div className="flex flex-wrap justify-center gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">120+</div>
                <div className="text-sm text-blue-100">掲載企業数</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">500+</div>
                <div className="text-sm text-blue-100">インターン実績</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">85%</div>
                <div className="text-sm text-blue-100">内定率</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="container-max px-4 sm:px-6 lg:px-8 py-12">
        {/* 法人向けCTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl p-8 mb-12 text-center"
        >
          <div className="flex items-center justify-center mb-4">
            <Building2 className="w-8 h-8 mr-3" />
            <h2 className="text-2xl font-bold">法人様向けサービス</h2>
          </div>
          <p className="text-lg mb-6 opacity-90">
            優秀な大学生インターンの採用をサポートします。求人掲載から面接設定まで一貫してサポート。
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-white text-green-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-xl transition-colors duration-200 shadow-lg"
          >
            <ExternalLink className="w-5 h-5 mr-2" />
            インターン求人掲載のお問い合わせ
          </Link>
        </motion.div>

        {/* 検索・フィルタセクション */}
        <InternFilters
          searchQuery={searchQuery}
          selectedJobType={selectedJobType}
          selectedLocation={selectedLocation}
          selectedDuration={selectedDuration}
          selectedSalary={selectedSalary}
          selectedGrade={selectedGrade}
          selectedStatus={selectedStatus}
          jobTypes={jobTypes}
          locations={locations}
          durations={durations}
          salaryRanges={salaryRanges}
          targetGrades={targetGrades}
          statusOptions={statusOptions}
          onFilter={(query, jobType, location, duration, salary, grade, status) => {
            setSearchQuery(query)
            setSelectedJobType(jobType)
            setSelectedLocation(location)
            setSelectedDuration(duration)
            setSelectedSalary(salary)
            setSelectedGrade(grade)
            setSelectedStatus(status)
            handleFilter(query, jobType, location, duration, salary, grade, status)
          }}
        />

        {/* インターン一覧 */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredInternships.map((internship, index) => (
            <motion.div key={internship.id} variants={itemVariants}>
              <InternCard internship={internship} />
            </motion.div>
          ))}
        </motion.div>

        {/* 検索結果が空の場合 */}
        {filteredInternships.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-gray-400 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              インターンシップが見つかりませんでした
            </h3>
            <p className="text-gray-500 mb-6">
              検索条件を変更して再度お試しください
            </p>
            <button
              onClick={() => {
                setSearchQuery('')
                setSelectedJobType('全て')
                setSelectedLocation('全て')
                setSelectedDuration('全て')
                setSelectedSalary('全て')
                setSelectedGrade('全て')
                setSelectedStatus('全て')
                setFilteredInternships(mockInternships)
              }}
              className="btn-primary"
            >
              全てのインターンシップを表示
            </button>
          </motion.div>
        )}

        {/* ページネーション */}
        {filteredInternships.length > 0 && (
          <div className="flex justify-center mt-12">
            <div className="flex space-x-2">
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                前へ
              </button>
              <button className="px-4 py-2 bg-primary text-white rounded-lg">
                1
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                2
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                次へ
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
