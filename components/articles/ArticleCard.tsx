'use client'

import { motion } from 'framer-motion'
import { Calendar, Clock, Eye, User, ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface Article {
  id: string
  title: string
  excerpt: string
  category: string
  tags: string[]
  publishedAt: string
  readTime: string
  views: number
  thumbnail: string
  author: string
}

interface ArticleCardProps {
  article: Article
}

const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
    >
      <div className="cursor-pointer">
        {/* サムネイル */}
        <div className="relative overflow-hidden">
          <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
            <div className="text-6xl text-primary/30 font-bold">ク</div>
          </div>
          
          {/* カテゴリタグ */}
          <div className="absolute top-4 left-4">
            <span className="inline-block bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
              {article.category}
            </span>
          </div>
          
          {/* ホバー時のオーバーレイ */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
            <ArrowRight className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>

        {/* コンテンツ */}
        <div className="p-6">
          {/* タイトル */}
          <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-200">
            {article.title}
          </h3>

          {/* 要約 */}
          <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
            {article.excerpt}
          </p>

          {/* タグ */}
          <div className="flex flex-wrap gap-2 mb-4">
            {article.tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-md"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* メタ情報 */}
          <div className="flex items-center justify-between text-xs text-gray-500 border-t border-gray-100 pt-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <User className="w-3 h-3" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Calendar className="w-3 h-3" />
                <span>{new Date(article.publishedAt).toLocaleDateString('ja-JP')}</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Clock className="w-3 h-3" />
                <span>{article.readTime}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Eye className="w-3 h-3" />
                <span>{article.views.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default ArticleCard
