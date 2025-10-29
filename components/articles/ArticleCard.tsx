'use client'

import { motion } from 'framer-motion'
import { Calendar, User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { MicroCMSArticle } from '@/types/article'

interface ArticleCardProps {
  article: MicroCMSArticle
}

const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-lg xs:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group touch-manipulation"
    >
      <Link href={`/articles/${article.id}`} className="block cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-lg">
        {/* サムネイル */}
        <div className="relative overflow-hidden h-32 xs:h-40 sm:h-48">
          {article.thumbnail?.url ? (
            <Image
              src={article.thumbnail.url}
              alt={article.title}
              width={article.thumbnail.width || 800}
              height={article.thumbnail.height || 600}
              className="w-full h-full object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
              <div className="text-3xl xs:text-4xl sm:text-6xl text-primary/30 font-bold">ク</div>
            </div>
          )}
          
          {/* ホバー時のオーバーレイ */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300">
          </div>
        </div>

        {/* コンテンツ */}
        <div className="p-3 xs:p-4 sm:p-6">
          {/* タイトル */}
          <h3 className="text-sm xs:text-base sm:text-lg font-bold text-gray-900 mb-3 xs:mb-4 
                       line-clamp-2 group-hover:text-primary transition-colors duration-200">
            {article.title}
          </h3>

          {/* メタ情報 */}
          <div className="flex flex-col space-y-2 text-xs text-gray-500">
            <div className="flex items-center space-x-1">
              <User className="w-3 h-3 flex-shrink-0" />
              <span className="truncate">{article.author}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Calendar className="w-3 h-3 flex-shrink-0" />
              <span>
                {new Date(article.publishedAt).toLocaleDateString('ja-JP', {
                  year: 'numeric',
                  month: '2-digit',
                  day: '2-digit'
                })}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default ArticleCard
