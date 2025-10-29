'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Head from 'next/head'
import ArticleCard from '@/components/articles/ArticleCard'
import CategorySidebar from '@/components/articles/CategorySidebar'
import { getArticles } from '@/lib/api/microcms'
import { MicroCMSArticle } from '@/types/article'

export default function ArticlesPage() {
  const [selectedCategory, setSelectedCategory] = useState('全て')
  const [articles, setArticles] = useState<MicroCMSArticle[]>([])
  const [filteredArticles, setFilteredArticles] = useState<MicroCMSArticle[]>([])
  const [categories, setCategories] = useState<string[]>(['全て'])
  const [loading, setLoading] = useState(true)

  // MicroCMSからデータ取得
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const data = await getArticles()
        if (data && data.contents) {
          setArticles(data.contents)
          setFilteredArticles(data.contents)
          
          // カテゴリを抽出してセット
          const uniqueCategories = Array.from(
            new Set(data.contents.map((article: MicroCMSArticle) => article.category))
          ).filter(Boolean) as string[]
          
          setCategories(['全て', ...uniqueCategories])
        }
      } catch (error) {
        console.error('Failed to fetch articles:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchArticles()
  }, [])

  // フィルタ機能
  useEffect(() => {
    let filtered = articles

    if (selectedCategory !== '全て') {
      filtered = filtered.filter(article => article.category === selectedCategory)
    }

    setFilteredArticles(filtered)
  }, [selectedCategory, articles])

  const handleReset = () => {
    setSelectedCategory('全て')
    setFilteredArticles(articles)
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

  // SEO設定
  const pageTitle = selectedCategory !== '全て' ? `${selectedCategory} - クルカツ記事` : 'クルカツ記事'
  const pageDescription = selectedCategory !== '全て' 
    ? `${selectedCategory}に関する記事一覧です。クルカツの最新情報をお届けします。`
    : 'クルカツの最新記事一覧です。様々なカテゴリの記事をお楽しみください。'
  const currentUrl = `${process.env.NEXT_PUBLIC_SITE_URL || 'https://kurukatsu-web.vercel.app'}/articles`
  const ogImage = `${process.env.NEXT_PUBLIC_SITE_URL || 'https://kurukatsu-web.vercel.app'}/icon.png`

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={`クルカツ, 記事, ${selectedCategory !== '全て' ? selectedCategory : 'ニュース'}`} />
        
        {/* OGP設定 */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={ogImage} />
        <meta property="og:site_name" content="クルカツ" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={ogImage} />
        
        {/* その他のSEO設定 */}
        <link rel="canonical" href={currentUrl} />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
      {/* ページタイトル */}
      <div 
        className="flex items-center justify-center min-h-[240px] py-10 px-6 md:px-20"
        style={{
          backgroundImage: 'url(/articles-header-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <h1 className="text-3xl md:text-5xl font-black">クルカツ記事</h1>
      </div>

      {/* メインコンテンツ */}
      <div className="py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[calc(100%-320px)_280px] gap-12 md:gap-16">
            {/* メインエリア */}
            <main className="w-full">
              {loading ? (
                <div className="text-center py-16">
                  <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                  <p className="mt-4 text-gray-600">読み込み中...</p>
                </div>
              ) : (
                <div>
                  {/* カテゴリタイトル */}
                  {selectedCategory !== '全て' && (
                    <h2 className="text-2xl md:text-3xl font-black mb-6">{selectedCategory}</h2>
                  )}

                  {/* 記事一覧 */}
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10"
                  >
                    {filteredArticles.map((article) => (
                      <motion.div key={article.id} variants={itemVariants}>
                        <ArticleCard article={article} />
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* 記事が見つからない場合 */}
                  {filteredArticles.length === 0 && (
                    <div className="text-center py-16">
                      <h3 className="text-xl font-semibold text-gray-600 mb-2">
                        記事が見つかりませんでした
                      </h3>
                      <p className="text-gray-500 mb-6">
                        カテゴリを変更してお試しください
                      </p>
                      <button
                        onClick={handleReset}
                        className="btn-primary"
                      >
                        全ての記事を表示
                      </button>
                    </div>
                  )}
                </div>
              )}
            </main>

            {/* サイドバー */}
            <aside className="hidden lg:block">
              <CategorySidebar 
                categories={categories}
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
              />
            </aside>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}
