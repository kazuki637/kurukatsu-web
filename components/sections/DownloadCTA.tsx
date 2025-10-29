'use client'

import { motion } from 'framer-motion'
import { Download, ArrowRight, Star, Smartphone } from 'lucide-react'

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
              <h3 className="text-lg font-semibold mb-2">App Store対応</h3>
              <p className="text-blue-100 text-sm">
                iOSアプリからサクッとダウンロード
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
            <motion.a
              href="https://apps.apple.com/jp/app/%E3%82%AF%E3%83%AB%E3%82%AB%E3%83%84/id6751227085"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center bg-secondary hover:bg-amber-600 text-white font-bold py-4 px-8 rounded-xl shadow-2xl transition-all duration-300"
            >
              今すぐ無料ダウンロード
              <ArrowRight className="w-5 h-5 ml-2" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default DownloadCTA
