'use client'

import { motion } from 'framer-motion'
import { Search, Users, Calendar, MessageCircle, Target, BarChart3 } from 'lucide-react'

const ValueProposition = () => {
  const studentBenefits = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "簡単サークル検索",
      description: "大学、ジャンル、活動日など細かい条件で理想のサークルを見つけられます。"
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "気軽にコミュニケーション",
      description: "サークルメンバーや運営者と直接メッセージでやり取りできます。"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "新しい仲間との出会い",
      description: "同じ興味を持つ仲間と繋がり、充実したキャンパスライフを送れます。"
    }
  ]

  const organizerBenefits = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "効率的なメンバー募集",
      description: "条件にマッチした学生に直接アプローチでき、質の高いメンバーを獲得できます。"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "スケジュール管理",
      description: "活動予定の共有から出欠確認まで、サークル運営が格段に楽になります。"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "活動実績の可視化",
      description: "メンバーの活動状況や参加率などをデータで把握し、運営改善に活かせます。"
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
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            あなたの大学生活を
            <span className="text-primary">変える</span>理由
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            学生もサークル運営者も、それぞれにとって価値のある機能を提供します
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* 学生向け価値訴求 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-2xl mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                サークルを探している学生へ
              </h3>
              <p className="text-gray-600">
                理想のサークルとの出会いをサポート
              </p>
            </div>

            <div className="space-y-6">
              {studentBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {benefit.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
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
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 text-secondary rounded-2xl mb-4">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                サークル運営者へ
              </h3>
              <p className="text-gray-600">
                効率的なサークル運営を実現
              </p>
            </div>

            <div className="space-y-6">
              {organizerBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary/10 text-secondary rounded-lg flex items-center justify-center">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {benefit.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
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
          className="text-center mt-16"
        >
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <a
              href="#"
              className="btn-primary text-lg px-8 py-4"
            >
              学生として始める
            </a>
            <a
              href="#"
              className="btn-outline text-lg px-8 py-4"
            >
              サークル運営者として始める
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ValueProposition
