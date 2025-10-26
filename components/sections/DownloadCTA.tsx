'use client'

import { motion } from 'framer-motion'
import { Download, Smartphone, ArrowRight, Star, Play } from 'lucide-react'

const DownloadCTA = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="section-padding gradient-bg relative overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-16 w-48 h-48 bg-secondary rounded-full blur-2xl"></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-white rounded-full blur-lg"></div>
        <div className="absolute bottom-1/4 left-1/3 w-16 h-16 bg-secondary rounded-full blur-lg"></div>
      </div>

      <div className="container-max relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center text-white"
        >
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Star className="w-5 h-5 fill-secondary text-secondary" />
              <span className="text-sm font-semibold">15,000人以上が利用中</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              今すぐダウンロードして
              <br />
              <span className="text-secondary">新しい出会い</span>を始めよう
            </h2>
            
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              あなたの大学生活を変える、最初の一歩はここから。
              <br />
              理想のサークルとの出会いが、今すぐ手の中に。
            </p>
          </motion.div>

          {/* ダウンロードボタン */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12"
          >
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center bg-black hover:bg-gray-800 text-white py-4 px-8 rounded-2xl transition-all duration-300 shadow-2xl min-w-[200px]"
            >
              <Download className="w-6 h-6 mr-3" />
              <div className="text-left">
                <div className="text-xs opacity-80">Download on the</div>
                <div className="text-lg font-semibold">App Store</div>
              </div>
            </motion.a>

            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center bg-black hover:bg-gray-800 text-white py-4 px-8 rounded-2xl transition-all duration-300 shadow-2xl min-w-[200px]"
            >
              <Smartphone className="w-6 h-6 mr-3" />
              <div className="text-left">
                <div className="text-xs opacity-80">GET IT ON</div>
                <div className="text-lg font-semibold">Google Play</div>
              </div>
            </motion.a>
          </motion.div>

          {/* QRコード風装飾 */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12"
          >
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 bg-white rounded-lg p-2 shadow-lg">
                <div className="w-full h-full bg-gray-900 rounded grid grid-cols-4 gap-1 p-1">
                  {[...Array(16)].map((_, i) => (
                    <div
                      key={i}
                      className={`rounded-sm ${
                        Math.random() > 0.5 ? 'bg-white' : 'bg-gray-900'
                      }`}
                    />
                  ))}
                </div>
              </div>
              <div className="text-left">
                <p className="text-sm text-blue-100 mb-1">QRコードで簡単</p>
                <p className="font-semibold">スマホでスキャン</p>
              </div>
            </div>

            <div className="flex items-center space-x-2 text-blue-100">
              <span>または</span>
              <ArrowRight className="w-4 h-4" />
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg px-6 py-3 transition-all duration-300"
            >
              <Play className="w-5 h-5" />
              <span>使い方動画を見る</span>
            </motion.button>
          </motion.div>

          {/* 特徴ポイント */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <motion.div
              variants={itemVariants}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center"
            >
              <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                <Download className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">完全無料</h3>
              <p className="text-blue-100 text-sm">
                ダウンロードから利用まで、全ての機能が無料で使えます
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center"
            >
              <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">高評価</h3>
              <p className="text-blue-100 text-sm">
                App Store・Google Play両方で4.8★の高評価を獲得
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center"
            >
              <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">簡単操作</h3>
              <p className="text-blue-100 text-sm">
                直感的なUI/UXで、誰でも簡単にサークルを見つけられます
              </p>
            </motion.div>
          </motion.div>

          {/* 最終CTA */}
          <motion.div
            variants={itemVariants}
            className="mt-12 pt-8 border-t border-white/20"
          >
            <p className="text-blue-100 mb-4">
              今すぐ始めて、新しいキャンパスライフをスタートしませんか？
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-secondary hover:bg-amber-600 text-white font-bold py-4 px-8 rounded-xl shadow-2xl transition-all duration-300"
            >
              今すぐ無料ダウンロード
              <ArrowRight className="w-5 h-5 ml-2 inline" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default DownloadCTA
