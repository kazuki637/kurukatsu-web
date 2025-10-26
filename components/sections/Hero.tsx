'use client'

import { motion } from 'framer-motion'
import { Download, Play, Star, Users, Trophy } from 'lucide-react'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="hero-gradient min-h-screen flex items-center relative overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-xl"></div>
        <div className="absolute bottom-32 right-16 w-48 h-48 bg-secondary rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-white rounded-full blur-lg"></div>
      </div>

      <div className="container-max relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 左側：テキストコンテンツ */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-white"
          >
            <div className="flex items-center space-x-2 mb-6">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
              </div>
              <span className="text-sm bg-white/20 px-3 py-1 rounded-full">
                App Store 4.8★
              </span>
            </div>

            <div className="flex items-center space-x-4 mb-8">
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                <span className="text-white font-bold text-4xl tracking-tight">K</span>
              </div>
              <div className="flex flex-col">
                <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                  クルカツ
                </h1>
                <p className="text-blue-100 text-lg">大学生向けサークルアプリ</p>
              </div>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              大学生活を
              <br />
              <span className="text-secondary">もっと充実</span>させよう
            </h2>

            <p className="text-xl mb-8 text-blue-100 leading-relaxed">
              あなたにぴったりのサークルが見つかる
              <br />
              大学生専用のマッチングアプリです。
              <br />
              新しい仲間と出会い、素敵なキャンパスライフを始めませんか？
            </p>

            {/* 統計情報 */}
            <div className="flex flex-wrap items-center gap-8 mb-8">
              <div className="flex items-center space-x-2">
                <Users className="w-6 h-6 text-secondary" />
                <div>
                  <div className="text-2xl font-bold">15,000+</div>
                  <div className="text-sm text-blue-100">登録学生数</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Trophy className="w-6 h-6 text-secondary" />
                <div>
                  <div className="text-2xl font-bold">800+</div>
                  <div className="text-sm text-blue-100">登録サークル数</div>
                </div>
              </div>
            </div>

            {/* CTAボタン */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#"
                className="inline-flex items-center justify-center bg-white text-primary hover:bg-gray-100 font-semibold py-4 px-8 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <Download className="w-5 h-5 mr-2" />
                無料ダウンロード
              </a>
              <button className="inline-flex items-center justify-center bg-white/20 hover:bg-white/30 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 backdrop-blur-sm">
                <Play className="w-5 h-5 mr-2" />
                使い方を見る
              </button>
            </div>
          </motion.div>

          {/* 右側：アプリモックアップ */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            <div className="relative max-w-sm mx-auto">
              {/* メインのスマホモックアップ */}
              <div className="bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl">
                <div className="bg-white rounded-[2rem] overflow-hidden">
                  <div className="h-96 bg-gradient-to-br from-blue-50 to-blue-100 p-6">
                    {/* アプリUI モックアップ */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                          <span className="text-white font-bold text-xs">K</span>
                        </div>
                        <div className="flex space-x-2">
                          <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                          <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                        <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-white rounded-lg p-3 shadow-sm">
                          <div className="w-full h-16 bg-primary/20 rounded mb-2"></div>
                          <div className="h-3 bg-gray-200 rounded mb-1"></div>
                          <div className="h-2 bg-gray-200 rounded w-2/3"></div>
                        </div>
                        <div className="bg-white rounded-lg p-3 shadow-sm">
                          <div className="w-full h-16 bg-secondary/20 rounded mb-2"></div>
                          <div className="h-3 bg-gray-200 rounded mb-1"></div>
                          <div className="h-2 bg-gray-200 rounded w-2/3"></div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="bg-white rounded-lg p-3 shadow-sm">
                          <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-primary/20 rounded-full"></div>
                            <div className="flex-1">
                              <div className="h-3 bg-gray-200 rounded mb-1"></div>
                              <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 浮遊する要素 */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -left-4 bg-secondary text-white px-3 py-2 rounded-lg text-sm font-semibold shadow-lg"
              >
                新着サークル
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -right-4 bg-white text-primary px-3 py-2 rounded-lg text-sm font-semibold shadow-lg"
              >
                マッチング成功！
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* スクロール促進 */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
