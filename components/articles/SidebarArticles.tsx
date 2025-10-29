import Link from 'next/link'
import Image from 'next/image'
import { MicroCMSArticle } from '@/types/article'

interface SidebarArticlesProps {
  articles: MicroCMSArticle[]
}

export default function SidebarArticles({ articles }: SidebarArticlesProps) {
  if (articles.length === 0) {
    return (
      <div>
        <h2 className="text-2xl font-bold mb-6">関連する記事</h2>
        <p className="text-gray-600">関連記事はありません</p>
      </div>
    )
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">関連する記事</h2>
      <ul className="list-none p-0 flex flex-col gap-2">
        {articles.map((article) => {
          const publishedDate = new Date(article.publishedAt).toLocaleDateString('ja-JP', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
          })

          return (
            <li key={article.id}>
              <Link
                href={`/articles/${article.id}`}
                className="block text-sm md:text-base text-gray-900 text-left w-full p-4 bg-transparent border border-black rounded relative cursor-pointer transition-all duration-300 hover:text-white hover:font-bold hover:bg-black group"
              >
                <div className="pr-8">
                  <p className="font-semibold line-clamp-2 mb-2">{article.title}</p>
                  <p className="text-xs text-gray-500 group-hover:text-gray-300">{publishedDate}</p>
                </div>
                {/* 矢印アイコン */}
                <svg
                  className="absolute top-1/2 right-4 -translate-y-1/2 w-6 h-6 transition-transform duration-300 group-hover:translate-x-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

