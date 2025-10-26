'use client'

import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface RelatedArticle {
  id: string
  title: string
  category: string
  publishedAt: string
  readTime: string
}

interface RelatedArticlesProps {
  articles: RelatedArticle[]
}

const RelatedArticles = ({ articles }: RelatedArticlesProps) => {
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

  if (articles.length === 0) {
    return null
  }

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="mt-12"
    >
      <motion.div variants={itemVariants} className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">関連記事</h2>
        <p className="text-gray-600">こちらの記事もおすすめです</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <motion.div
            key={article.id}
            variants={itemVariants}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <Link href={`/articles/${article.id}`}>
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group h-full flex flex-col">
                {/* サムネイル */}
                <div className="relative h-32 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <div className="text-3xl text-primary/30 font-bold">ク</div>
                  
                  {/* カテゴリタグ */}
                  <div className="absolute top-3 left-3">
                    <span className="inline-block bg-primary text-white text-xs font-semibold px-2 py-1 rounded-full">
                      {article.category}
                    </span>
                  </div>

                  {/* ホバー時のオーバーレイ */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <ArrowRight className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>

                {/* コンテンツ */}
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-200">
                    {article.title}
                  </h3>

                  <div className="mt-auto flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{new Date(article.publishedAt).toLocaleDateString('ja-JP')}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* すべての記事を見るリンク */}
      <motion.div
        variants={itemVariants}
        className="text-center mt-8"
      >
        <Link
          href="/articles"
          className="inline-flex items-center space-x-2 btn-outline text-lg px-8 py-3"
        >
          <span>すべての記事を見る</span>
          <ArrowRight className="w-5 h-5" />
        </Link>
      </motion.div>
    </motion.section>
  )
}

export default RelatedArticles
