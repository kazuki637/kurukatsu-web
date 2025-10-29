'use client'

import { motion } from 'framer-motion'
import { Search, Users, Calendar, MessageCircle, Target, BarChart3, Download } from 'lucide-react'

const ValueProposition = () => {
  const studentBenefits = [
    {
      icon: <Search className="w-full h-full" />,
      title: "簡単サークル検索",
      description: "大学、ジャンル、活動日など細かい条件でサークルを見つけられます。"
    },
    {
      icon: <MessageCircle className="w-full h-full" />,
      title: "気軽にコミュニケーション",
      description: "サークルメンバーに対して宛先を選択し、連絡を一斉送信できます。"
    },
    {
      icon: <Users className="w-full h-full" />,
      title: "新しい仲間との出会い",
      description: "同じ興味を持つ仲間と繋がり、充実したキャンパスライフを送れます。"
    }
  ]

  const organizerBenefits = [
    {
      icon: <Target className="w-full h-full" />,
      title: "効率的なメンバー募集",
      description: "条件にマッチした学生に直接アプローチでき、質の高いメンバーを獲得できます。"
    },
    {
      icon: <Calendar className="w-full h-full" />,
      title: "スケジュール管理",
      description: "活動予定の共有から出欠確認まで、サークル運営が格段に楽になります。"
    },
    {
      icon: <BarChart3 className="w-full h-full" />,
      title: "活動資金の確保",
      description: "企業からの協賛金を受け、新興サークルもイベントや活動の規模を拡大できます。"
    }
  ]

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
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-8 xs:mb-12 sm:mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-2xl xs:text-3xl sm:text-4xl font-bold text-gray-900 mb-3 xs:mb-4"
          >
            あなたの大学生活を
            <span className="text-primary">もっと便利に</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-sm xs:text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto"
          >
            新入生もサークル運営者も、それぞれにとって価値のある機能を提供します
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xs:gap-12 lg:gap-16">
          {/* 学生向け価値訴求 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <div className="text-center mb-6 xs:mb-8">
              <div className="inline-flex items-center justify-center w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 
                           bg-primary/10 text-primary rounded-xl xs:rounded-2xl mb-3 xs:mb-4">
                <Users className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                サークルを探している学生へ
              </h3>
              <p className="text-sm xs:text-base text-gray-600">
                理想のサークルとの出会いをサポート
              </p>
            </div>

            <div className="space-y-4 xs:space-y-6">
              {studentBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start space-x-3 xs:space-x-4 p-4 xs:p-5 sm:p-6 
                           bg-white rounded-lg xs:rounded-xl shadow-sm hover:shadow-md 
                           transition-shadow duration-300"
                >
                  <div className="flex-shrink-0 w-10 h-10 xs:w-12 xs:h-12 bg-primary/10 text-primary 
                               rounded-lg flex items-center justify-center">
                    <div className="w-5 h-5 xs:w-6 xs:h-6">
                      {benefit.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-base xs:text-lg font-semibold text-gray-900 mb-1 xs:mb-2">
                      {benefit.title}
                    </h4>
                    <p className="text-sm xs:text-base text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 運営者向け価値訴求 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <div className="text-center mb-6 xs:mb-8">
              <div className="inline-flex items-center justify-center w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 
                           bg-secondary/10 text-secondary rounded-xl xs:rounded-2xl mb-3 xs:mb-4">
                <Target className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                サークル運営者へ
              </h3>
              <p className="text-sm xs:text-base text-gray-600">
                効率的なサークル運営を実現
              </p>
            </div>

            <div className="space-y-4 xs:space-y-6">
              {organizerBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start space-x-3 xs:space-x-4 p-4 xs:p-5 sm:p-6 
                           bg-white rounded-lg xs:rounded-xl shadow-sm hover:shadow-md 
                           transition-shadow duration-300"
                >
                  <div className="flex-shrink-0 w-10 h-10 xs:w-12 xs:h-12 bg-secondary/10 text-secondary 
                               rounded-lg flex items-center justify-center">
                    <div className="w-5 h-5 xs:w-6 xs:h-6">
                      {benefit.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-base xs:text-lg font-semibold text-gray-900 mb-1 xs:mb-2">
                      {benefit.title}
                    </h4>
                    <p className="text-sm xs:text-base text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={itemVariants}
          className="text-center mt-8 xs:mt-12 sm:mt-16"
        >
          <div className="flex flex-col xs:flex-row gap-3 xs:gap-4 max-w-md xs:max-w-none mx-auto justify-center">
            <a
              href="https://apps.apple.com/jp/app/%E3%82%AF%E3%83%AB%E3%82%AB%E3%83%84/id6751227085"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-primary hover:bg-blue-700 active:bg-blue-800 
                       text-white font-semibold py-3 px-6 xs:py-4 xs:px-8 rounded-xl 
                       transition-all duration-200 shadow-lg hover:shadow-xl
                       text-sm xs:text-base min-h-[48px] touch-manipulation"
            >
              <Download className="w-4 h-4 xs:w-5 xs:h-5 mr-2" />
              無料ダウンロード
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ValueProposition
