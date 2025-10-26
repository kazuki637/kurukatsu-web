'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { List, ChevronRight } from 'lucide-react'

interface Heading {
  id: string
  text: string
  level: number
}

interface TableOfContentsProps {
  headings: Heading[]
}

const TableOfContents = ({ headings }: TableOfContentsProps) => {
  const [activeId, setActiveId] = useState<string>('')
  const [isOpen, setIsOpen] = useState(true)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-20% 0px -35% 0px',
        threshold: 0
      }
    )

    // 見出し要素を監視
    headings.forEach((heading) => {
      const element = document.getElementById(heading.id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [headings])

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 100 // ヘッダーの高さ分のオフセット
      const elementPosition = element.offsetTop - offset
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
  }

  if (headings.length === 0) {
    return null
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden"
    >
      <div 
        className="flex items-center justify-between p-4 bg-gray-50 border-b border-gray-200 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center space-x-2">
          <List className="w-5 h-5 text-primary" />
          <h3 className="font-semibold text-gray-900">目次</h3>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronRight className="w-4 h-4 text-gray-500" />
        </motion.div>
      </div>

      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <nav className="p-4">
          <ul className="space-y-2">
            {headings.map((heading, index) => (
              <motion.li
                key={heading.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={`
                  ${heading.level === 2 ? 'ml-0' : heading.level === 3 ? 'ml-4' : 'ml-8'}
                `}
              >
                <button
                  onClick={() => scrollToHeading(heading.id)}
                  className={`
                    block w-full text-left py-2 px-3 rounded-lg transition-all duration-200 group hover:bg-primary/5
                    ${activeId === heading.id
                      ? 'bg-primary/10 text-primary font-medium border-l-2 border-primary'
                      : 'text-gray-700 hover:text-primary'
                    }
                    ${heading.level === 2 ? 'text-sm font-medium' : 'text-xs'}
                  `}
                >
                  <span className="flex items-center">
                    <span className="flex-1 line-clamp-2">
                      {heading.text}
                    </span>
                    {activeId === heading.id && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-2 h-2 bg-primary rounded-full ml-2"
                      />
                    )}
                  </span>
                </button>
              </motion.li>
            ))}
          </ul>
        </nav>
      </motion.div>

      {/* プログレスバー */}
      <div className="h-1 bg-gray-100">
        <motion.div
          className="h-full bg-primary"
          style={{
            width: `${((headings.findIndex(h => h.id === activeId) + 1) / headings.length) * 100}%`
          }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  )
}

export default TableOfContents
