'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Filter, Calendar, Tag, Eye, Clock } from 'lucide-react'
import Link from 'next/link'
import ArticleCard from '@/components/articles/ArticleCard'
import SearchFilters from '@/components/articles/SearchFilters'

// ダミーデータ
const mockArticles = [
  {
    id: '1',
    title: '新入生必見！サークル選びで失敗しないための5つのポイント',
    excerpt: '大学生活を左右するサークル選び。後悔しないための重要なポイントを、先輩たちの体験談を交えて解説します。',
    category: '新入生向け',
    tags: ['新入生', 'サークル選び', '大学生活'],
    publishedAt: '2024-03-15',
    readTime: '5分',
    views: 1234,
    thumbnail: '/placeholder-article-1.jpg',
    author: 'クルカツ編集部'
  },
  {
    id: '2',
    title: 'インカレサークルと学内サークル、どちらを選ぶべき？',
    excerpt: 'インカレサークルと学内サークルの違いを詳しく解説。それぞれのメリット・デメリットを知って、最適な選択をしましょう。',
    category: 'サークル情報',
    tags: ['インカレ', '学内サークル', '比較'],
    publishedAt: '2024-03-12',
    readTime: '7分',
    views: 987,
    thumbnail: '/placeholder-article-2.jpg',
    author: '田中 美咲'
  },
  {
    id: '3',
    title: '体育会系サークルで学んだリーダーシップとチームワーク',
    excerpt: '体育会系サークルでの経験が、就職活動や社会人生活にどのように活かされるのか。実体験をもとにお話しします。',
    category: '体験談',
    tags: ['体育会系', 'リーダーシップ', 'チームワーク'],
    publishedAt: '2024-03-10',
    readTime: '6分',
    views: 756,
    thumbnail: '/placeholder-article-3.jpg',
    author: '佐藤 健太'
  },
  {
    id: '4',
    title: '文化系サークルで見つけた自分の可能性',
    excerpt: '音楽、美術、文学など、文化系サークルで得られる経験の価値について。創造性を育む環境での成長ストーリー。',
    category: '体験談',
    tags: ['文化系', '創造性', '自己発見'],
    publishedAt: '2024-03-08',
    readTime: '8分',
    views: 654,
    thumbnail: '/placeholder-article-4.jpg',
    author: '山田 花子'
  },
  {
    id: '5',
    title: 'オンラインサークル活動のメリットと注意点',
    excerpt: '新しい形のサークル活動として注目されるオンライン活動。その魅力と気をつけるべきポイントを整理しました。',
    category: 'トレンド',
    tags: ['オンライン', 'デジタル', '新しい形'],
    publishedAt: '2024-03-05',
    readTime: '4分',
    views: 543,
    thumbnail: '/placeholder-article-5.jpg',
    author: 'クルカツ編集部'
  },
  {
    id: '6',
    title: 'サークル運営者必見！効果的なメンバー募集の方法',
    excerpt: '新メンバーを効果的に募集するための戦略とテクニック。実際に成功したサークルの事例も紹介します。',
    category: '運営者向け',
    tags: ['運営', 'メンバー募集', '戦略'],
    publishedAt: '2024-03-03',
    readTime: '9分',
    views: 432,
    thumbnail: '/placeholder-article-6.jpg',
    author: '鈴木 太郎'
  }
]

const categories = ['全て', '新入生向け', 'サークル情報', '体験談', 'トレンド', '運営者向け']

export default function ArticlesPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('全て')
  const [filteredArticles, setFilteredArticles] = useState(mockArticles)

  // 検索・フィルタ機能
  const handleSearch = (query: string, category: string) => {
    let filtered = mockArticles

    if (category !== '全て') {
      filtered = filtered.filter(article => article.category === category)
    }

    if (query) {
      filtered = filtered.filter(article =>
        article.title.toLowerCase().includes(query.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(query.toLowerCase()) ||
        article.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
      )
    }

    setFilteredArticles(filtered)
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
              クルカツ記事
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              サークル活動に関する役立つ情報、体験談、最新トレンドをお届けします
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container-max px-4 sm:px-6 lg:px-8 py-12">
        {/* 検索・フィルタセクション */}
        <SearchFilters
          searchQuery={searchQuery}
          selectedCategory={selectedCategory}
          categories={categories}
          onSearch={(query, category) => {
            setSearchQuery(query)
            setSelectedCategory(category)
            handleSearch(query, category)
          }}
        />

        {/* 記事一覧 */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredArticles.map((article, index) => (
            <motion.div key={article.id} variants={itemVariants}>
              <ArticleCard article={article} />
            </motion.div>
          ))}
        </motion.div>

        {/* 検索結果が空の場合 */}
        {filteredArticles.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-gray-400 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              記事が見つかりませんでした
            </h3>
            <p className="text-gray-500 mb-6">
              検索条件を変更して再度お試しください
            </p>
            <button
              onClick={() => {
                setSearchQuery('')
                setSelectedCategory('全て')
                setFilteredArticles(mockArticles)
              }}
              className="btn-primary"
            >
              全ての記事を表示
            </button>
          </motion.div>
        )}

        {/* ページネーション（後で実装） */}
        {filteredArticles.length > 0 && (
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
                3
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
