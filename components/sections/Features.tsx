'use client'

import { motion } from 'framer-motion'
import { Search, MessageSquare, Calendar, Users, BarChart3, Shield } from 'lucide-react'
import { useState } from 'react'

const Features = () => {
  const [activeTab, setActiveTab] = useState(0)

  const features = [
    {
      id: 'search',
      icon: <Search className="w-6 h-6" />,
      title: '柔軟な検索フィルタ',
      description: '大学、ジャンル、活動日、レベルなど細かい条件で理想のサークルを検索',
      image: '/placeholder-search.jpg',
      highlights: [
        '大学・学部別絞り込み',
        'ジャンル・カテゴリ別検索',
        '活動日・時間帯指定',
        'レベル・経験不問フィルタ',
        'キーワード検索'
      ]
    },
    {
      id: 'communication',
      icon: <MessageSquare className="w-6 h-6" />,
      title: '掲示板・メッセージ機能',
      description: 'サークルメンバーや運営者と気軽にコミュニケーションが取れる',
      image: '/placeholder-chat.jpg',
      highlights: [
        'リアルタイムメッセージ',
        'サークル掲示板',
        '質問・相談コーナー',
        '写真・動画共有',
        'グループトーク'
      ]
    },
    {
      id: 'management',
      icon: <Calendar className="w-6 h-6" />,
      title: 'サークル管理機能',
      description: 'メンバー管理、スケジュール調整、連絡事項の共有まで一括管理',
      image: '/placeholder-management.jpg',
      highlights: [
        'メンバー情報管理',
        '活動スケジュール共有',
        '出欠確認システム',
        '連絡事項一斉配信',
        '活動記録・レポート'
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <section className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            充実した
            <span className="text-primary">機能</span>で
            <br />
            サークル活動をもっと楽しく
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            学生とサークル運営者、両方の視点から設計された使いやすい機能
          </motion.p>
        </motion.div>

        {/* タブナビゲーション */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {features.map((feature, index) => (
            <motion.button
              key={feature.id}
              variants={itemVariants}
              onClick={() => setActiveTab(index)}
              className={`flex items-center space-x-3 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === index
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {feature.icon}
              <span>{feature.title}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* 機能詳細 */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* 左側：説明 */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center">
                {features[activeTab].icon}
              </div>
              <h3 className="text-3xl font-bold text-gray-900">
                {features[activeTab].title}
              </h3>
            </div>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {features[activeTab].description}
            </p>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                主な特徴
              </h4>
              <div className="grid gap-3">
                {features[activeTab].highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 右側：スクリーンショット */}
          <div className="relative">
            <div className="bg-gray-900 rounded-[2rem] p-4 shadow-2xl max-w-sm mx-auto">
              <div className="bg-gray-100 rounded-[1.5rem] overflow-hidden">
                <div className="h-96 bg-gradient-to-br from-blue-50 to-blue-100 p-6 relative">
                  {/* 動的コンテンツ（アクティブなタブに応じて変更） */}
                  {activeTab === 0 && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h5 className="font-semibold text-gray-800">サークル検索</h5>
                        <Search className="w-5 h-5 text-primary" />
                      </div>
                      
                      <div className="bg-white rounded-lg p-3 shadow-sm">
                        <div className="h-3 bg-gray-200 rounded mb-2"></div>
                        <div className="flex space-x-2">
                          <div className="h-2 bg-primary/50 rounded flex-1"></div>
                          <div className="h-2 bg-secondary/50 rounded w-16"></div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-white rounded-lg p-3">
                          <div className="w-full h-12 bg-primary/20 rounded mb-2"></div>
                          <div className="h-2 bg-gray-200 rounded mb-1"></div>
                          <div className="h-2 bg-gray-200 rounded w-2/3"></div>
                        </div>
                        <div className="bg-white rounded-lg p-3">
                          <div className="w-full h-12 bg-secondary/20 rounded mb-2"></div>
                          <div className="h-2 bg-gray-200 rounded mb-1"></div>
                          <div className="h-2 bg-gray-200 rounded w-2/3"></div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 1 && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h5 className="font-semibold text-gray-800">メッセージ</h5>
                        <MessageSquare className="w-5 h-5 text-primary" />
                      </div>
                      
                      <div className="space-y-2">
                        <div className="bg-primary/20 rounded-lg p-3 ml-8">
                          <div className="h-2 bg-primary/60 rounded mb-1"></div>
                          <div className="h-2 bg-primary/40 rounded w-3/4"></div>
                        </div>
                        <div className="bg-white rounded-lg p-3 mr-8 shadow-sm">
                          <div className="h-2 bg-gray-200 rounded mb-1"></div>
                          <div className="h-2 bg-gray-200 rounded w-2/3"></div>
                        </div>
                        <div className="bg-secondary/20 rounded-lg p-3 ml-8">
                          <div className="h-2 bg-secondary/60 rounded"></div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 2 && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h5 className="font-semibold text-gray-800">管理画面</h5>
                        <Calendar className="w-5 h-5 text-primary" />
                      </div>
                      
                      <div className="bg-white rounded-lg p-3 shadow-sm">
                        <div className="grid grid-cols-7 gap-1 mb-3">
                          {[...Array(7)].map((_, i) => (
                            <div key={i} className="h-6 bg-gray-100 rounded text-xs flex items-center justify-center">
                              {i + 1}
                            </div>
                          ))}
                        </div>
                        <div className="space-y-2">
                          <div className="h-3 bg-primary/30 rounded"></div>
                          <div className="h-3 bg-secondary/30 rounded w-3/4"></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* 装飾要素 */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-secondary rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-primary rounded-full opacity-10"></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Features
