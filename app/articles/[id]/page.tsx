'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import { getArticle, getArticles } from '@/lib/api/microcms'
import { MicroCMSArticle } from '@/types/article'
import IconText from '@/components/articles/IconText'
import SocialShareArticle from '@/components/articles/SocialShareArticle'
import SidebarArticles from '@/components/articles/SidebarArticles'
import BodyRenderer from '@/components/articles/body/BodyRenderer'
import { Calendar, Edit } from 'lucide-react'

export default function ArticlePage() {
  const params = useParams()
  const id = params.id as string
  
  const [article, setArticle] = useState<MicroCMSArticle | null>(null)
  const [relatedArticles, setRelatedArticles] = useState<MicroCMSArticle[]>([])
  const [loading, setLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const articleData = await getArticle(id)
        
        if (!articleData) {
          setNotFound(true)
          return
        }
        
        setArticle(articleData)
        
        // 関連記事を取得（同じカテゴリの記事を3件まで）
        const allArticles = await getArticles()
        const related = allArticles?.contents
          ?.filter((a: MicroCMSArticle) => a.category === articleData.category && a.id !== articleData.id)
          .slice(0, 3) || []
        setRelatedArticles(related)
      } catch (error) {
        console.error('Failed to fetch article:', error)
        setNotFound(true)
      } finally {
        setLoading(false)
      }
    }
    
    fetchData()
  }, [id])

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          <p className="mt-4 text-gray-600">読み込み中...</p>
        </div>
      </div>
    )
  }

  if (notFound || !article) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">記事が見つかりません</h1>
          <Link href="/articles" className="btn-primary">
            記事一覧に戻る
          </Link>
        </div>
      </div>
    )
  }

  const publishedDate = new Date(article.publishedAt).toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
  
  const updatedDate = new Date(article.revisedAt).toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  // SEO設定
  const seoTitle = article.seo_settings?.meta_title || article.title
  const seoDescription = article.seo_settings?.meta_description || `${article.title} - クルカツ記事`
  const ogTitle = article.seo_settings?.og_title || seoTitle
  const ogDescription = article.seo_settings?.og_description || seoDescription
  const ogImage = article.seo_settings?.og_image?.url || article.thumbnail?.url || `${process.env.NEXT_PUBLIC_SITE_URL || 'https://kurukatsu-web.vercel.app'}/icon.png`
  const ogImageWidth = article.seo_settings?.og_image?.width || article.thumbnail?.width || 1200
  const ogImageHeight = article.seo_settings?.og_image?.height || article.thumbnail?.height || 630
  const keywords = article.seo_settings?.keywords || `${article.category}, クルカツ, 記事`
  const canonicalUrl = article.seo_settings?.canonical_url || `${process.env.NEXT_PUBLIC_SITE_URL || 'https://kurukatsu-web.vercel.app'}/articles/${article.id}`

  return (
    <>
      <Head>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <meta name="keywords" content={keywords} />
        
        {/* OGP設定 */}
        <meta property="og:title" content={ogTitle} />
        <meta property="og:description" content={ogDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content={ogImageWidth.toString()} />
        <meta property="og:image:height" content={ogImageHeight.toString()} />
        <meta property="og:site_name" content="クルカツ" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={ogTitle} />
        <meta name="twitter:description" content={ogDescription} />
        <meta name="twitter:image" content={ogImage} />
        
        {/* その他のSEO設定 */}
        <meta name="author" content={article.author} />
        <meta name="article:published_time" content={article.publishedAt} />
        <meta name="article:modified_time" content={article.revisedAt} />
        <meta name="article:section" content={article.category} />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
      {/* メインコンテンツ */}
      <div className="py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[calc(100%-320px)_280px] gap-12 md:gap-16">
            {/* メインエリア */}
            <main className="w-full">
              <article>
                {/* 投稿ヘッダー */}
                <header className="pb-2 mb-12">
                  {/* カテゴリ */}
                  <div className="mb-2">
                    <span className="inline-block text-gray-50 leading-none py-2 px-4 rounded-full bg-primary">
                      {article.category}
                    </span>
                  </div>

                  {/* タイトル */}
                  <h1 className="text-2xl md:text-3xl font-black leading-[1.5] border-b border-gray-200 pb-4 mt-2 mb-2">
                    {article.title}
                  </h1>

                  {/* 投稿日と更新日 */}
                  <div className="flex flex-wrap gap-6 text-sm md:text-base mt-4">
                    <IconText icon={<Calendar size={20} />} text={publishedDate} />
                    <IconText icon={<Edit size={20} />} text={updatedDate} />
                  </div>
                </header>

                {/* サムネイル */}
                {article.thumbnail && (
                  <div className="mb-10 shadow-[0_0_8px_rgba(0,0,0,0.1)] rounded overflow-hidden">
                    <Image
                      src={article.thumbnail.url}
                      alt={article.title}
                      width={article.thumbnail.width}
                      height={article.thumbnail.height}
                      className="w-full"
                      priority
                    />
                  </div>
                )}

                {/* 記事本文 */}
                <div className="text-sm md:text-base leading-[1.7]">
                  {article.body && article.body.length > 0 ? (
                    <BodyRenderer body={article.body} />
                  ) : (
                    <p>コンテンツがありません</p>
                  )}
                </div>

                {/* SNSシェア */}
                <div className="mt-8 md:mt-20">
                  <SocialShareArticle 
                    title={article.title}
                    url={`${process.env.NEXT_PUBLIC_SITE_URL || 'https://kurukatsu-web.vercel.app'}/articles/${article.id}`}
                  />
                </div>
              </article>

              {/* 記事一覧に戻る */}
              <div className="mt-10 pt-6 border-t border-gray-200">
                <p>
                  <Link href="/articles" className="text-primary hover:underline flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    記事一覧に戻る
                  </Link>
                </p>
              </div>
            </main>

            {/* サイドバー */}
            <aside className="hidden lg:block">
              <SidebarArticles articles={relatedArticles} />
            </aside>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

