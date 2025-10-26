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
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group ${
        !isActive ? 'opacity-75' : ''
      }`}
    >
      <div className="cursor-pointer">
        {/* ヘッダー */}
        <div className="relative p-6 bg-gradient-to-br from-gray-50 to-blue-50">
          {/* ステータスバッジ */}
          <div className="flex items-center justify-between mb-4">
            <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${
              isActive 
                ? 'bg-green-100 text-green-800' 
                : 'bg-gray-100 text-gray-600'
            }`}>
              {sponsor.status}
            </span>
            
            {isActive && isDeadlineClose && (
              <span className="inline-block bg-red-100 text-red-800 text-xs font-semibold px-2 py-1 rounded-full">
                締切間近
              </span>
            )}
          </div>

          {/* 企業ロゴ */}
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
              <Building2 className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-900">{sponsor.company}</h4>
              <div className="flex items-center space-x-2">
                {sponsor.targetType.map((type, index) => (
                  <span key={index} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
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
        <div className="p-6">
          {/* タイトル */}
          <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-200">
            {sponsor.title}
          </h3>

          {/* 説明 */}
          <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
            {sponsor.description}
          </p>

          {/* ジャンルタグ */}
          <div className="flex flex-wrap gap-2 mb-4">
            {sponsor.genre.slice(0, 3).map((genre, index) => (
              <span
                key={index}
                className="inline-block bg-secondary/10 text-secondary text-xs px-2 py-1 rounded-md font-medium"
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
          <div className="flex items-center justify-between text-xs text-gray-500 border-t border-gray-100 pt-4">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-1">
                <Calendar className="w-3 h-3" />
                <span>
                  {new Date(sponsor.deadline).toLocaleDateString('ja-JP')} 締切
                </span>
              </div>
            </div>
            
            <div className="flex items-center space-x-1">
              <Users className="w-3 h-3" />
              <span>{sponsor.participants}</span>
            </div>
          </div>

          {/* 応募ボタンエリア */}
          <div className="mt-4 pt-4 border-t border-gray-100">
            <div className={`w-full text-center py-2 px-4 rounded-lg font-semibold transition-all duration-200 ${
              isActive 
                ? 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white'
                : 'bg-gray-100 text-gray-500'
            }`}>
              {isActive ? '詳細を見る・応募する' : '募集終了'}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default SponsorCard
