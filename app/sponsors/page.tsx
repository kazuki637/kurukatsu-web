'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Filter, Building, Clock, Users, Gift, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import SponsorCard from '@/components/sponsors/SponsorCard'
import SponsorFilters from '@/components/sponsors/SponsorFilters'

// ダミーデータ
const mockSponsors = [
  {
    id: '1',
    title: '大学生向けITスキルアップ支援プログラム',
    company: 'テックフューチャー株式会社',
    logo: '/placeholder-company-1.jpg',
    description: 'プログラミング学習のサポートと実践的なプロジェクト経験を提供。優秀な学生にはインターンシップの機会も。',
    targetType: ['インカレ', '学内'],
    genre: ['IT・プログラミング', '学問系'],
    benefits: ['活動資金10万円支援', '専門講師派遣', 'インターン機会提供'],
    deadline: '2024-04-30',
    participants: '50名限定',
    status: '募集中',
    requirements: ['大学1-3年生', 'プログラミングに興味のある方', '継続的な参加が可能な方']
  },
  {
    id: '2',
    title: '環境保護活動サポート・資材提供',
    company: 'グリーンアース株式会社',
    logo: '/placeholder-company-2.jpg',
    description: '環境保護・ボランティア活動を行うサークルに清掃用具、苗木、活動資金を提供します。',
    targetType: ['学内'],
    genre: ['ボランティア', '環境'],
    benefits: ['活動資材提供', '活動資金5万円', '成果発表会参加'],
    deadline: '2024-05-15',
    participants: '10団体まで',
    status: '募集中',
    requirements: ['環境保護活動実績のあるサークル', '定期的な活動報告が可能', '成果発表への参加']
  },
  {
    id: '3',
    title: 'スポーツ用品・ウェア提供キャンペーン',
    company: 'アスリートサポート株式会社',
    logo: '/placeholder-company-3.jpg',
    description: '体育会系サークルにスポーツ用品、トレーニングウェアを提供。パフォーマンス向上をサポートします。',
    targetType: ['インカレ', '学内'],
    genre: ['スポーツ', '体育会系'],
    benefits: ['スポーツ用品提供', 'ウェア50着まで', 'トレーナー派遣'],
    deadline: '2024-04-15',
    participants: '20団体まで',
    status: '募集中',
    requirements: ['体育会系サークル', '定期的な練習活動', 'SNSでの活動報告']
  },
  {
    id: '4',
    title: '音楽活動支援・機材レンタル',
    company: 'ミュージックライフ株式会社',
    logo: '/placeholder-company-4.jpg',
    description: '音楽系サークルに楽器・音響機材のレンタル、ライブ会場の提供を行います。',
    targetType: ['インカレ'],
    genre: ['音楽', '文化系'],
    benefits: ['楽器レンタル', 'ライブ会場提供', '録音スタジオ利用'],
    deadline: '2024-05-30',
    participants: '5団体限定',
    status: '募集中',
    requirements: ['音楽活動実績のあるサークル', 'ライブ開催予定', '機材管理可能']
  },
  {
    id: '5',
    title: '学生起業家育成プログラム',
    company: 'イノベーション投資株式会社',
    logo: '/placeholder-company-5.jpg',
    description: '起業を目指す学生サークルにメンタリング、資金援助、ビジネスプラン策定支援を提供。',
    targetType: ['インカレ', '学内'],
    genre: ['ビジネス', '起業'],
    benefits: ['資金援助20万円', 'メンター派遣', 'ピッチイベント参加'],
    deadline: '2024-06-30',
    participants: '10チーム限定',
    status: '募集中',
    requirements: ['ビジネスアイデアの具体化', 'チーム結成済み', '継続的な活動意欲']
  },
  {
    id: '6',
    title: '地域活性化プロジェクト支援',
    company: '地域創生株式会社',
    logo: '/placeholder-company-6.jpg',
    description: '地域活性化に取り組むサークルに活動資金と地域コーディネーターを派遣します。',
    targetType: ['学内'],
    genre: ['地域活性化', 'ボランティア'],
    benefits: ['活動資金15万円', 'コーディネーター派遣', '成果報告会'],
    deadline: '2024-03-31',
    participants: '8団体まで',
    status: '募集終了',
    requirements: ['地域との連携実績', '継続的な活動計画', '成果の可視化']
  }
]

const targetTypes = ['全て', 'インカレ', '学内']
const genres = ['全て', 'IT・プログラミング', 'スポーツ', '音楽', 'ボランティア', '環境', 'ビジネス', '地域活性化', '学問系', '文化系', '体育会系', '起業']
const statusOptions = ['全て', '募集中', '募集終了']

export default function SponsorsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedTargetType, setSelectedTargetType] = useState('全て')
  const [selectedGenre, setSelectedGenre] = useState('全て')
  const [selectedStatus, setSelectedStatus] = useState('全て')
  const [filteredSponsors, setFilteredSponsors] = useState(mockSponsors)

  // 検索・フィルタ機能
  const handleFilter = (query: string, targetType: string, genre: string, status: string) => {
    let filtered = mockSponsors

    if (targetType !== '全て') {
      filtered = filtered.filter(sponsor => sponsor.targetType.includes(targetType))
    }

    if (genre !== '全て') {
      filtered = filtered.filter(sponsor =>
        sponsor.genre.some(g => g.includes(genre))
      )
    }

    if (status !== '全て') {
      filtered = filtered.filter(sponsor => sponsor.status === status)
    }

    if (query) {
      filtered = filtered.filter(sponsor =>
        sponsor.title.toLowerCase().includes(query.toLowerCase()) ||
        sponsor.company.toLowerCase().includes(query.toLowerCase()) ||
        sponsor.description.toLowerCase().includes(query.toLowerCase()) ||
        sponsor.genre.some(g => g.toLowerCase().includes(query.toLowerCase()))
      )
    }

    setFilteredSponsors(filtered)
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
              協賛案件
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              サークル活動をサポートする企業からの協賛案件をご紹介します
            </p>
            
            {/* 統計情報 */}
            <div className="flex flex-wrap justify-center gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">50+</div>
                <div className="text-sm text-blue-100">協賛企業数</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">200+</div>
                <div className="text-sm text-blue-100">協賛実績</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">1000万円+</div>
                <div className="text-sm text-blue-100">累計支援額</div>
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
          className="bg-gradient-to-r from-secondary to-yellow-500 text-white rounded-xl p-8 mb-12 text-center"
        >
          <div className="flex items-center justify-center mb-4">
            <Building className="w-8 h-8 mr-3" />
            <h2 className="text-2xl font-bold">法人様向けサービス</h2>
          </div>
          <p className="text-lg mb-6 opacity-90">
            貴社の協賛案件を掲載し、優秀な大学生サークルとのマッチングを支援します
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-white text-secondary hover:bg-gray-100 font-semibold py-3 px-8 rounded-xl transition-colors duration-200 shadow-lg"
          >
            <ExternalLink className="w-5 h-5 mr-2" />
            協賛案件掲載のお問い合わせ
          </Link>
        </motion.div>

        {/* 検索・フィルタセクション */}
        <SponsorFilters
          searchQuery={searchQuery}
          selectedTargetType={selectedTargetType}
          selectedGenre={selectedGenre}
          selectedStatus={selectedStatus}
          targetTypes={targetTypes}
          genres={genres}
          statusOptions={statusOptions}
          onFilter={(query, targetType, genre, status) => {
            setSearchQuery(query)
            setSelectedTargetType(targetType)
            setSelectedGenre(genre)
            setSelectedStatus(status)
            handleFilter(query, targetType, genre, status)
          }}
        />

        {/* 協賛案件一覧 */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredSponsors.map((sponsor, index) => (
            <motion.div key={sponsor.id} variants={itemVariants}>
              <SponsorCard sponsor={sponsor} />
            </motion.div>
          ))}
        </motion.div>

        {/* 検索結果が空の場合 */}
        {filteredSponsors.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-gray-400 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              協賛案件が見つかりませんでした
            </h3>
            <p className="text-gray-500 mb-6">
              検索条件を変更して再度お試しください
            </p>
            <button
              onClick={() => {
                setSearchQuery('')
                setSelectedTargetType('全て')
                setSelectedGenre('全て')
                setSelectedStatus('全て')
                setFilteredSponsors(mockSponsors)
              }}
              className="btn-primary"
            >
              全ての協賛案件を表示
            </button>
          </motion.div>
        )}

        {/* ページネーション */}
        {filteredSponsors.length > 0 && (
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
