'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: 'トップ', href: '/' },
    { name: 'クルカツ記事', href: '/articles' },
    { name: '協賛案件', href: '/sponsors' },
    { name: 'インターン', href: '/internships' },
    { name: 'お問い合わせ', href: '/contact' },
  ]

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 pt-safe-top">
      <div className="container-max">
        <div className="flex items-center justify-between h-14 xs:h-16 sm:h-16">
          {/* ロゴ */}
          <Link href="/" className="flex items-center touch-manipulation">
            <Image
              src="/HOME-Header-Title.png"
              alt="クルカツ - 大学生向けサークルアプリ"
              width={160}
              height={36}
              className="h-8 xs:h-10 sm:h-12 w-auto object-contain"
              unoptimized={true}
              priority
            />
          </Link>

          {/* デスクトップナビゲーション */}
          <nav className="hidden md:flex items-center space-x-8 ml-auto">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className={
                  index === navItems.length - 1
                    ? 'text-black font-bold border border-gray-700 hover:border-primary hover:bg-blue-600 hover:text-white px-3 py-1.5'
                    : 'text-black font-bold hover:text-primary'
                }
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* モバイルメニューボタン */}
          <button
            className="md:hidden p-3 rounded-lg text-gray-700 hover:bg-gray-100 active:bg-gray-200 
                       focus:outline-none focus:ring-2 focus:ring-primary touch-manipulation
                       min-h-[44px] min-w-[44px] flex items-center justify-center transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "メニューを閉じる" : "メニューを開く"}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* モバイルメニュー */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden bg-white border-t border-gray-200"
            >
              <nav className="px-4 py-6 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block py-4 px-4 rounded-lg text-gray-700 hover:text-primary hover:bg-blue-50 
                               active:bg-blue-100 font-medium transition-all duration-300 text-base
                               min-h-[48px] flex items-center touch-manipulation"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-6 border-t border-gray-200">
                  <Link
                    href="/contact"
                    className="btn-primary w-full text-center block touch-manipulation"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    お問い合わせ
                  </Link>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}

export default Header
