// MicroCMSから取得するインターンシップの型定義
export interface MicroCMSInternship {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
  title: string
  company: string
  logo?: {
    url: string
    width: number
    height: number
  }
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

// ページで使用するインターンシップの型定義
export interface Internship {
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

