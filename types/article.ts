// MicroCMSから取得する記事の型定義
export interface MicroCMSArticle {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
  title: string
  category: string
  thumbnail: {
    url: string
    width: number
    height: number
  }
  author: string
  body: ArticleBodyItem[]
  seo_settings?: {
    meta_title?: string
    meta_description?: string
    og_title?: string
    og_description?: string
    og_image?: {
      url: string
      width: number
      height: number
    }
    keywords?: string
    canonical_url?: string
  }
}

// Bodyフィールドの各ブロック型定義
export interface ArticleBodyButton {
  fieldId: 'button'
  button_text: string
  button_link: string
  external_link: boolean
}

export interface ArticleBodyCarousel {
  fieldId: 'carousel'
  effect: string | string[]
  delay_speed?: number
  animation_speed?: number
  loop: boolean
  pagination: boolean
  scrollbar: boolean
  navigation: boolean
  images: Array<{
    url: string
    width: number
    height: number
  }>
}

export interface ArticleBodyEditor {
  fieldId: 'editor'
  editor: string
}

export type ArticleBodyItem = 
  | ArticleBodyButton
  | ArticleBodyCarousel
  | ArticleBodyEditor

// ページで使用する記事の型定義
export interface Article {
  id: string
  title: string
  category: string
  publishedAt: string
  thumbnail: string
  author: string
}

