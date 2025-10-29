// MicroCMSから取得する協賛案件の型定義
export interface MicroCMSSponsor {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
  title: string
  company: string
  thumbnail?: {
    url: string
    width: number
    height: number
  }
  content: string
  category: string
  deadline: string
  participants: number
  status: string
}

// ページで使用する協賛案件の型定義
export interface Sponsor {
  id: string
  title: string
  company: string
  thumbnail: string
  content: string
  category: string
  deadline: string
  participants: number
  status: string
}
