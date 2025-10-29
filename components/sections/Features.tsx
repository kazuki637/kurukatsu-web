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
      description: '大学、ジャンル、活動日、男女比など細かい条件で自分に合ったサークルを検索',
      image: '/placeholder-search.jpg',
      highlights: [
        '大学別絞り込み',
        'ジャンル・カテゴリ別検索',
        '活動頻度・活動曜日指定',
        '男女比フィルタ',
        'キーワード検索'
      ]
    },
    {
      id: 'communication',
      icon: <MessageSquare className="w-6 h-6" />,
      title: '連絡網・カレンダー共有機能',
      description: 'サークルメンバーに対して重要な連絡や活動スケジュールを共有できる',
      image: '/placeholder-chat.jpg',
      highlights: [
        '宛先を選択して連絡を送信',
        '期限を指定して出席確認',
        'シンプルで見やすいカレンダー',
        'プッシュ通知で連絡を見逃さない'
      ]
    },
    {
      id: 'management',
      icon: <Calendar className="w-6 h-6" />,
      title: 'メンバー管理機能',
      description: '入会申請の承諾・拒否や強制退会、代表者の引継ぎも簡単',
      image: '/placeholder-management.jpg',
      highlights: [
        '入会申請の管理',
        '見やすいメンバーリスト',
        '代表者引き継ぎも1タップで',
        '管理者権限を複数人に付与可能'
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
          className="text-center mb-8 xs:mb-12 sm:mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-2xl xs:text-3xl sm:text-4xl font-bold text-gray-900 mb-3 xs:mb-4"
          >
            充実した
            <span className="text-primary">機能</span>で
            <br />
            サークル活動をサポート
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-sm xs:text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto"
          >
            サークルにとって必要な機能がこのアプリだけで完結
          </motion.p>
        </motion.div>

        {/* タブナビゲーション */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="flex flex-col xs:flex-row xs:flex-wrap justify-center gap-2 xs:gap-3 sm:gap-4 mb-8 xs:mb-10 sm:mb-12"
        >
          {features.map((feature, index) => (
            <motion.button
              key={feature.id}
              variants={itemVariants}
              onClick={() => setActiveTab(index)}
              className={`flex items-center justify-center xs:justify-start space-x-2 xs:space-x-3 
                         px-4 xs:px-5 sm:px-6 py-3 xs:py-3 sm:py-3 
                         rounded-lg xs:rounded-xl font-semibold transition-all duration-300
                         text-sm xs:text-base touch-manipulation min-h-[48px] ${
                activeTab === index
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 active:bg-gray-300'
              }`}
            >
              <div className="w-5 h-5 xs:w-6 xs:h-6">{feature.icon}</div>
              <span className="whitespace-nowrap">{feature.title}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* 機能詳細 */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 xs:gap-8 lg:gap-12 items-center"
        >
          {/* 左側：説明 */}
          <div className="order-2 lg:order-1">
            <div className="flex items-center space-x-3 xs:space-x-4 mb-4 xs:mb-6">
              <div className="w-10 h-10 xs:w-12 xs:h-12 bg-primary text-white rounded-lg xs:rounded-xl 
                           flex items-center justify-center">
                <div className="w-5 h-5 xs:w-6 xs:h-6">{features[activeTab].icon}</div>
              </div>
              <h3 className="text-xl xs:text-2xl sm:text-3xl font-bold text-gray-900">
                {features[activeTab].title}
              </h3>
            </div>

            <p className="text-sm xs:text-base sm:text-lg lg:text-xl text-gray-600 mb-6 xs:mb-8 leading-relaxed">
              {features[activeTab].description}
            </p>

            <div className="space-y-3 xs:space-y-4">
              <h4 className="text-base xs:text-lg font-semibold text-gray-900 mb-3 xs:mb-4">
                主な特徴
              </h4>
              <div className="grid gap-2 xs:gap-3">
                {features[activeTab].highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-1.5 h-1.5 xs:w-2 xs:h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-sm xs:text-base text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 右側：スクリーンショット */}
          <div className="relative order-1 lg:order-2">
            <div className="bg-gray-900 rounded-[1.5rem] xs:rounded-[2rem] p-2 xs:p-3 sm:p-4 shadow-2xl 
                         max-w-xs xs:max-w-sm mx-auto">
              <div className="bg-gray-100 rounded-[1.25rem] xs:rounded-[1.5rem] overflow-hidden">
                <div className="h-64 xs:h-80 sm:h-96 bg-gradient-to-br from-blue-50 to-blue-100 
                             p-3 xs:p-4 sm:p-6 relative">
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
            <div className="absolute -top-2 xs:-top-4 -right-2 xs:-right-4 w-6 h-6 xs:w-8 xs:h-8 
                         bg-secondary rounded-full opacity-20"></div>
            <div className="absolute -bottom-2 xs:-bottom-4 -left-2 xs:-left-4 w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 
                         bg-primary rounded-full opacity-10"></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Features
