'use client'

import { motion } from 'framer-motion'
import { Download } from 'lucide-react'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className="min-h-screen min-h-[100dvh] flex items-center relative overflow-hidden 
                       pt-14 xs:pt-16 sm:pt-0 pb-12 xs:pb-16 sm:pb-20">
      {/* 背景写真 */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-background.png"
          alt=""
          fill
          style={{ objectPosition: '70% center' }}
          className="object-cover"
          priority
          unoptimized={true}
        />
      </div>

      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="flex items-start">
            {/* テキストコンテンツ */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-left max-w-xl lg:max-w-2xl"
            >
            <div className="flex items-center justify-start space-x-2 mb-4 xs:mb-6">
              <span className="text-xs xs:text-sm bg-white/30 backdrop-blur-sm px-2 xs:px-3 py-1 rounded-full text-gray-800 font-semibold shadow-md">
                ベータ版公開中
              </span>
            </div>

            <div className="flex items-center justify-start space-x-3 xs:space-x-4 mb-6 xs:mb-8">
              <Image
                src="/icon.png"
                alt="クルカツロゴ"
                width={80}
                height={80}
                className="h-16 xs:h-20 sm:h-24 w-auto object-contain rounded-xl"
                unoptimized={true}
              />
            </div>

            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 xs:mb-6 leading-tight text-white" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
              大学生活を
              <br />
              <span className="text-yellow-400">もっと充実</span>させよう
            </h2>

            <p className="text-sm xs:text-base sm:text-lg lg:text-xl mb-6 xs:mb-8 text-white leading-relaxed" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.3)' }}>
              あなたにぴったりのサークルが見つかる
              <br className="hidden xs:block" />
              <span className="xs:hidden"> </span>大学生専用のプラットフォームです。
              <br />
              新しい仲間と出会い、素敵なキャンパスライフを始めませんか？
            </p>

            {/* CTAボタン */}
            <div className="flex flex-col xs:flex-row gap-3 xs:gap-4 justify-start">
              <a
                href="https://apps.apple.com/jp/app/%E3%82%AF%E3%83%AB%E3%82%AB%E3%83%84/id6751227085"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white text-primary hover:bg-gray-100 
                         active:bg-gray-200 font-semibold py-3 px-6 xs:py-4 xs:px-8 rounded-xl 
                         transition-all duration-200 shadow-lg hover:shadow-xl
                         text-sm xs:text-base min-h-[48px] touch-manipulation"
              >
                <Download className="w-4 h-4 xs:w-5 xs:h-5 mr-2" />
                無料ダウンロード
              </a>
            </div>
          </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
