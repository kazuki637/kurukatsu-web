import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'クルカツ - 大学生向けサークルアプリ | サークルマッチング',
  description: '「クルカツ」は大学生向けサークルアプリです。あなたにぴったりのサークルを簡単に見つけ、サークル運営者が効率的にメンバー募集・管理ができるプラットフォームです。',
  keywords: 'クルカツ,サークル,大学生,マッチング,アプリ,学生生活,サークル活動',
  openGraph: {
    title: 'クルカツ - 大学生向けサークルアプリ',
    description: '「クルカツ」は大学生向けサークルアプリです。あなたにぴったりのサークルを簡単に見つけ、サークル運営者が効率的にメンバー募集・管理ができるプラットフォームです。',
    type: 'website',
    siteName: 'クルカツ - 大学生向けサークルアプリ',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
