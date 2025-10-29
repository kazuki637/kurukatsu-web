'use client'

import { motion } from 'framer-motion'
import { Calendar, Users, Gift, ArrowRight, Clock, Building2 } from 'lucide-react'
import Link from 'next/link'

interface Sponsor {
  id: string
  title: string
  company: string
  logo: string
  description: string
  targetType: string[]
  genre: string[]
  benefits: string[]
  deadline: string
  participants: string
  status: string
  requirements: string[]
}

interface SponsorCardProps {
  sponsor: Sponsor
}

const SponsorCard = ({ sponsor }: SponsorCardProps) => {
  const isActive = sponsor.status === '募集中'
  const isDeadlineClose = new Date(sponsor.deadline) < new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)

  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.3 }}
      className={`bg-white rounded-lg xs:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 
                   overflow-hidden group touch-manipulation ${
        !isActive ? 'opacity-75' : ''
      }`}
    >
      <Link href={`/sponsors/${sponsor.id}`} className="block cursor-pointer">
        {/* ヘッダー */}
        <div className="relative p-3 xs:p-4 sm:p-6 bg-gradient-to-br from-gray-50 to-blue-50">
          {/* ステータスバッジ */}
          <div className="flex items-center justify-between mb-3 xs:mb-4">
            <span className={`inline-block text-xs font-semibold px-2 xs:px-3 py-1 rounded-full ${
              isActive 
                ? 'bg-green-100 text-green-800' 
                : 'bg-gray-100 text-gray-600'
            }`}>
              {sponsor.status}
            </span>
            
            {isActive && isDeadlineClose && (
              <span className="inline-block bg-red-100 text-red-800 text-xs font-semibold 
                           px-2 py-1 rounded-full">
                締切間近
              </span>
            )}
          </div>

          {/* 企業ロゴ */}
          <div className="flex items-center space-x-2 xs:space-x-3 mb-3 xs:mb-4">
            <div className="w-10 h-10 xs:w-12 xs:h-12 bg-primary/20 rounded-lg flex items-center justify-center">
              <Building2 className="w-5 h-5 xs:w-6 xs:h-6 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-xs xs:text-sm font-semibold text-gray-900 truncate">
                {sponsor.company}
              </h4>
              <div className="flex items-center space-x-1 xs:space-x-2 flex-wrap">
                {sponsor.targetType.slice(0, 2).map((type, index) => (
                  <span key={index} className="text-xs bg-blue-100 text-blue-700 px-1.5 xs:px-2 py-0.5 xs:py-1 rounded">
                    {type}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ホバー時のオーバーレイ */}
          <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-all duration-300 flex items-center justify-center">
            <ArrowRight className="w-8 h-8 text-primary opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
          </div>
        </div>

        {/* コンテンツ */}
        <div className="p-3 xs:p-4 sm:p-6">
          {/* タイトル */}
          <h3 className="text-sm xs:text-base sm:text-lg font-bold text-gray-900 mb-2 xs:mb-3 
                       line-clamp-2 group-hover:text-primary transition-colors duration-200">
            {sponsor.title}
          </h3>

          {/* 説明 */}
          <p className="text-gray-600 text-xs xs:text-sm mb-3 xs:mb-4 line-clamp-3 leading-relaxed">
            {sponsor.description}
          </p>

          {/* ジャンルタグ */}
          <div className="flex flex-wrap gap-1 xs:gap-2 mb-3 xs:mb-4">
            {sponsor.genre.slice(0, 3).map((genre, index) => (
              <span
                key={index}
                className="inline-block bg-secondary/10 text-secondary text-xs 
                         px-2 py-0.5 xs:py-1 rounded-md font-medium"
              >
                {genre}
              </span>
            ))}
          </div>

          {/* メリット（主要な3つ） */}
          <div className="mb-4">
            <div className="flex items-center space-x-1 mb-2">
              <Gift className="w-4 h-4 text-secondary" />
              <span className="text-sm font-semibold text-gray-900">主な支援内容</span>
            </div>
            <div className="space-y-1">
              {sponsor.benefits.slice(0, 2).map((benefit, index) => (
                <div key={index} className="flex items-center space-x-2 text-xs text-gray-700">
                  <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                  <span>{benefit}</span>
                </div>
              ))}
              {sponsor.benefits.length > 2 && (
                <div className="text-xs text-gray-500 italic">
                  +{sponsor.benefits.length - 2}つの支援
                </div>
              )}
            </div>
          </div>

          {/* メタ情報 */}
          <div className="flex flex-col xs:flex-row xs:items-center xs:justify-between 
                       text-xs text-gray-500 border-t border-gray-100 pt-2 xs:pt-3 sm:pt-4 space-y-2 xs:space-y-0">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-1">
                <Calendar className="w-3 h-3 flex-shrink-0" />
                <span className="whitespace-nowrap">
                  {new Date(sponsor.deadline).toLocaleDateString('ja-JP')} 締切
                </span>
              </div>
            </div>
            
            <div className="flex items-center space-x-1">
              <Users className="w-3 h-3 flex-shrink-0" />
              <span className="whitespace-nowrap">{sponsor.participants}</span>
            </div>
          </div>

          {/* 応募ボタンエリア */}
          <div className="mt-3 xs:mt-4 pt-3 xs:pt-4 border-t border-gray-100">
            <div className={`w-full text-center py-2 xs:py-3 px-4 rounded-lg font-semibold 
                          transition-all duration-200 text-sm xs:text-base min-h-[44px] 
                          flex items-center justify-center touch-manipulation ${
              isActive 
                ? 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white'
                : 'bg-gray-100 text-gray-500'
            }`}>
              {isActive ? '詳細を見る・応募する' : '募集終了'}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default SponsorCard
