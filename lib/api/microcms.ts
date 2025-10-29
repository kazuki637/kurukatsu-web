import { createClient } from 'microcms-js-sdk'

// serviceDomainから.microcms.ioを除去（SDKが自動的に追加するため）
const getServiceDomain = () => {
  const domain = process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN || 'kurukatsu-web'
  // .microcms.ioが含まれている場合は除去
  return domain.replace(/\.microcms\.io$/, '')
}

export const client = createClient({
  serviceDomain: getServiceDomain(),
  apiKey: process.env.NEXT_PUBLIC_MICROCMS_API_KEY || 'tY6jGkAFf7n9n8Tuf5erekEjHW6b5c8lBQBg',
})

// 記事一覧取得
export async function getArticles() {
  try {
    const data = await client.get({ endpoint: 'articles' })
    return data
  } catch (error) {
    console.error('Failed to fetch articles:', error)
    return null
  }
}

// 記事詳細取得
export async function getArticle(id: string) {
  try {
    const data = await client.get({ endpoint: 'articles', contentId: id })
    return data
  } catch (error) {
    console.error(`Failed to fetch article ${id}:`, error)
    return null
  }
}

// 協賛案件一覧取得
export async function getSponsors() {
  try {
    const data = await client.get({ endpoint: 'sponsors' })
    return data
  } catch (error) {
    console.error('Failed to fetch sponsors:', error)
    return null
  }
}

// 協賛案件詳細取得
export async function getSponsor(id: string) {
  try {
    const data = await client.get({ endpoint: 'sponsors', contentId: id })
    return data
  } catch (error) {
    console.error(`Failed to fetch sponsor ${id}:`, error)
    return null
  }
}

// インターンシップ一覧取得
export async function getInternships() {
  try {
    const data = await client.get({ endpoint: 'internships' })
    return data
  } catch (error) {
    console.error('Failed to fetch internships:', error)
    return null
  }
}

// インターンシップ詳細取得
export async function getInternship(id: string) {
  try {
    const data = await client.get({ endpoint: 'internships', contentId: id })
    return data
  } catch (error) {
    console.error(`Failed to fetch internship ${id}:`, error)
    return null
  }
}

