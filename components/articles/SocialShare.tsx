'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Share2, Twitter, MessageCircle, Facebook, Link2, Check } from 'lucide-react'

interface SocialShareProps {
  title: string
  url: string
  showText?: boolean
}

const SocialShare = ({ title, url, showText = false }: SocialShareProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  const shareButtons = [
    {
      name: 'Twitter',
      icon: <Twitter className="w-4 h-4" />,
      color: 'bg-blue-500 hover:bg-blue-600',
      onClick: () => {
        const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}&hashtags=クルカツ,大学生,サークル`
        window.open(twitterUrl, '_blank', 'width=550,height=420')
      }
    },
    {
      name: 'LINE',
      icon: <MessageCircle className="w-4 h-4" />,
      color: 'bg-green-500 hover:bg-green-600',
      onClick: () => {
        const lineUrl = `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(url)}`
        window.open(lineUrl, '_blank', 'width=550,height=420')
      }
    },
    {
      name: 'Facebook',
      icon: <Facebook className="w-4 h-4" />,
      color: 'bg-blue-600 hover:bg-blue-700',
      onClick: () => {
        const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
        window.open(facebookUrl, '_blank', 'width=550,height=420')
      }
    },
    {
      name: 'URLコピー',
      icon: copied ? <Check className="w-4 h-4" /> : <Link2 className="w-4 h-4" />,
      color: copied ? 'bg-green-500' : 'bg-gray-500 hover:bg-gray-600',
      onClick: async () => {
        try {
          await navigator.clipboard.writeText(url)
          setCopied(true)
          setTimeout(() => setCopied(false), 2000)
        } catch (err) {
          console.error('コピーに失敗しました:', err)
        }
      }
    }
  ]

  return (
    <div className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`
          inline-flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200
          ${showText 
            ? 'bg-primary text-white hover:bg-primary/90 shadow-md' 
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }
        `}
      >
        <Share2 className="w-4 h-4" />
        {showText && <span className="font-medium">シェアする</span>}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* オーバーレイ */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40"
            />

            {/* シェアメニュー */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full mt-2 right-0 bg-white rounded-xl shadow-xl border border-gray-200 p-4 z-50 min-w-[200px]"
            >
              <div className="mb-3">
                <h4 className="text-sm font-semibold text-gray-900 mb-1">
                  記事をシェア
                </h4>
                <p className="text-xs text-gray-500 line-clamp-2">
                  {title}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {shareButtons.map((button, index) => (
                  <motion.button
                    key={button.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                    onClick={() => {
                      button.onClick()
                      if (button.name !== 'URLコピー') {
                        setIsOpen(false)
                      }
                    }}
                    className={`
                      flex items-center justify-center space-x-2 py-2 px-3 rounded-lg text-white text-xs font-medium transition-all duration-200
                      ${button.color}
                    `}
                  >
                    {button.icon}
                    <span>{button.name}</span>
                  </motion.button>
                ))}
              </div>

              {/* 矢印 */}
              <div className="absolute -top-2 right-4 w-4 h-4 bg-white border-l border-t border-gray-200 transform rotate-45"></div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

export default SocialShare
