'use client'

import { motion, useInView } from 'framer-motion'
import { Users, Trophy, Heart, Star, TrendingUp, MapPin } from 'lucide-react'
import { useRef, useEffect, useState } from 'react'

// カウントアップフック
const useCountUp = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => {
    if (isInView && !hasStarted) {
      setHasStarted(true)
      let startTime: number | null = null
      
      const animate = (currentTime: number) => {
        if (startTime === null) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / duration, 1)
        
        // easeOutExpo の緩和関数
        const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
        setCount(Math.floor(end * easeOutExpo))
        
        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }
      
      requestAnimationFrame(animate)
    }
  }, [isInView, end, duration, hasStarted])

  return { count, ref }
}

const Statistics = () => {
  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      number: 15000,
      suffix: '+',
      label: '登録学生数',
      description: '全国の大学生が利用',
      color: 'text-primary'
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      number: 800,
      suffix: '+',
      label: '登録サークル数',
      description: '様々なジャンルのサークル',
      color: 'text-secondary'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      number: 5200,
      suffix: '+',
      label: 'マッチング成功数',
      description: '理想のサークルとの出会い',
      color: 'text-pink-500'
    },
    {
      icon: <Star className="w-8 h-8" />,
      number: 4.8,
      suffix: '★',
      label: 'アプリ評価',
      description: 'App Store・Google Play',
      color: 'text-yellow-500'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      number: 92,
      suffix: '%',
      label: '継続利用率',
      description: '3ヶ月以上の利用率',
      color: 'text-green-500'
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      number: 47,
      suffix: '都道府県',
      label: '全国対応',
      description: '北海道から沖縄まで',
      color: 'text-blue-500'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
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
            数字で見る
            <span className="text-primary">クルカツ</span>の実績
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            多くの学生とサークルに選ばれ続ける理由がここにあります
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {stats.map((stat, index) => {
            const StatCard = () => {
              const { count, ref } = useCountUp(stat.number)
              
              return (
                <motion.div
                  ref={ref}
                  variants={itemVariants}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:-translate-y-2"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 ${stat.color} bg-opacity-10`}
                  >
                    <div className={stat.color}>
                      {stat.icon}
                    </div>
                  </motion.div>

                  <div className="mb-4">
                    <div className="text-4xl font-bold text-gray-900 mb-2">
                      {stat.number === 4.8 ? (
                        <span>
                          {(count / 10).toFixed(1)}
                          <span className={`text-2xl ${stat.color}`}>{stat.suffix}</span>
                        </span>
                      ) : (
                        <span>
                          {count.toLocaleString()}
                          <span className={`text-2xl ${stat.color}`}>{stat.suffix}</span>
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {stat.label}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {stat.description}
                    </p>
                  </div>

                  {/* プログレスバー（視覚的効果） */}
                  <motion.div
                    className="w-full bg-gray-100 rounded-full h-2 overflow-hidden"
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  >
                    <motion.div
                      className={`h-full bg-gradient-to-r ${
                        stat.color === 'text-primary' ? 'from-primary to-blue-400' :
                        stat.color === 'text-secondary' ? 'from-secondary to-yellow-400' :
                        stat.color === 'text-pink-500' ? 'from-pink-500 to-pink-300' :
                        stat.color === 'text-yellow-500' ? 'from-yellow-500 to-yellow-300' :
                        stat.color === 'text-green-500' ? 'from-green-500 to-green-300' :
                        'from-blue-500 to-blue-300'
                      }`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${Math.min((stat.number / Math.max(...stats.map(s => s.number))) * 100, 100)}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: index * 0.1 + 0.5 }}
                    />
                  </motion.div>
                </motion.div>
              )
            }

            return <StatCard key={index} />
          })}
        </motion.div>

        {/* 追加のアピールポイント */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mt-16 text-center"
        >
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">K</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                なぜクルカツが選ばれるのか？
              </h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">安心・安全</h4>
                <p className="text-gray-600 text-sm">
                  大学メールアドレスでの本人確認により、安心して利用できます
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">高いマッチング率</h4>
                <p className="text-gray-600 text-sm">
                  独自のアルゴリズムで、あなたにぴったりのサークルを見つけます
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-pink-100 text-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">継続サポート</h4>
                <p className="text-gray-600 text-sm">
                  マッチング後も充実したサークル活動をサポートします
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Statistics
