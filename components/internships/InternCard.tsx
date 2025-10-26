'use client'

import { motion } from 'framer-motion'
import { MapPin, Calendar, DollarSign, Clock, Building2, ArrowRight, Users, Monitor } from 'lucide-react'
import Link from 'next/link'

interface Internship {
  id: string
  title: string
  company: string
  logo: string
  jobType: string
  location: string
  duration: string
  period: string
  salary: string
  targetGrades: string[]
  workStyle: string
  description: string
  tags: string[]
  requirements: string[]
  benefits: string[]
  status: string
}

interface InternCardProps {
  internship: Internship
}

const InternCard = ({ internship }: InternCardProps) => {
  const isActive = internship.status === '募集中'

  const getWorkStyleIcon = (style: string) => {
    if (style.includes('リモート')) {
      return <Monitor className="w-3 h-3" />
    }
    return <Building2 className="w-3 h-3" />
  }

  const getWorkStyleColor = (style: string) => {
    if (style.includes('リモート')) {
      return 'text-green-600 bg-green-100'
    }
    if (style.includes('ハイブリッド')) {
      return 'text-purple-600 bg-purple-100'
    }
    return 'text-gray-600 bg-gray-100'
  }

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
          {/* ステータスとワークスタイル */}
          <div className="flex items-center justify-between mb-4">
            <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${
              isActive 
                ? 'bg-green-100 text-green-800' 
                : 'bg-gray-100 text-gray-600'
            }`}>
              {internship.status}
            </span>
            
            <span className={`inline-flex items-center space-x-1 text-xs font-medium px-2 py-1 rounded-full ${getWorkStyleColor(internship.workStyle)}`}>
              {getWorkStyleIcon(internship.workStyle)}
              <span>{internship.workStyle}</span>
            </span>
          </div>

          {/* 企業・職種情報 */}
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
              <Building2 className="w-6 h-6 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-semibold text-gray-900 truncate">{internship.company}</h4>
              <div className="flex items-center space-x-2">
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded font-medium">
                  {internship.jobType}
                </span>
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
            {internship.title}
          </h3>

          {/* 説明 */}
          <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
            {internship.description}
          </p>

          {/* 勤務条件 */}
          <div className="space-y-2 mb-4">
            <div className="flex items-center space-x-2 text-xs text-gray-600">
              <MapPin className="w-3 h-3" />
              <span>{internship.location}</span>
            </div>
            <div className="flex items-center space-x-2 text-xs text-gray-600">
              <Calendar className="w-3 h-3" />
              <span>{internship.duration} ({internship.period})</span>
            </div>
            <div className="flex items-center space-x-2 text-xs text-gray-600">
              <DollarSign className="w-3 h-3" />
              <span>{internship.salary}</span>
            </div>
          </div>

          {/* 対象学年 */}
          <div className="flex items-center space-x-1 mb-4">
            <Users className="w-3 h-3 text-gray-500" />
            <div className="flex flex-wrap gap-1">
              {internship.targetGrades.slice(0, 3).map((grade, index) => (
                <span
                  key={index}
                  className="inline-block bg-secondary/10 text-secondary text-xs px-2 py-1 rounded font-medium"
                >
                  {grade}
                </span>
              ))}
              {internship.targetGrades.length > 3 && (
                <span className="text-xs text-gray-500">
                  +{internship.targetGrades.length - 3}
                </span>
              )}
            </div>
          </div>

          {/* スキルタグ */}
          <div className="flex flex-wrap gap-2 mb-4">
            {internship.tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-md"
              >
                {tag}
              </span>
            ))}
            {internship.tags.length > 3 && (
              <span className="text-xs text-gray-500 py-1">
                +{internship.tags.length - 3}個のスキル
              </span>
            )}
          </div>

          {/* 主要メリット */}
          <div className="mb-4">
            <div className="text-xs font-semibold text-gray-900 mb-2">主なメリット</div>
            <div className="space-y-1">
              {internship.benefits.slice(0, 2).map((benefit, index) => (
                <div key={index} className="flex items-center space-x-2 text-xs text-gray-700">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                  <span>{benefit}</span>
                </div>
              ))}
              {internship.benefits.length > 2 && (
                <div className="text-xs text-gray-500 italic">
                  +{internship.benefits.length - 2}つのメリット
                </div>
              )}
            </div>
          </div>

          {/* 応募ボタンエリア */}
          <div className="pt-4 border-t border-gray-100">
            <div className={`w-full text-center py-3 px-4 rounded-lg font-semibold transition-all duration-200 ${
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

export default InternCard
