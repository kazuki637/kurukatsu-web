'use client'

import { motion, useInView } from 'framer-motion'
import { Users, Trophy, GraduationCap } from 'lucide-react'
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
      icon: <Trophy className="w-full h-full" />,
      number: 5,
      suffix: '',
      label: '登録サークル数',
      description: '様々なジャンルのサークル',
      color: 'text-secondary'
    },
    {
      icon: <Users className="w-full h-full" />,
      number: 28,
      suffix: '人',
      label: '登録学生数',
      description: '利用中の学生',
      color: 'text-primary'
    },
    {
      icon: <GraduationCap className="w-full h-full" />,
      number: 1,
      suffix: '大学',
      label: 'サークルの所属大学',
      description: '現在は早稲田大学にのみ展開中',
      color: 'text-green-600'
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
          className="text-center mb-8 xs:mb-12 sm:mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-2xl xs:text-3xl sm:text-4xl font-bold text-gray-900 mb-3 xs:mb-4"
          >
            数字で見る
            <span className="text-primary">クルカツ</span>の実績
            <span className="inline-block ml-2 text-base xs:text-lg text-primary font-medium">(ベータ版)</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-sm xs:text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto"
          >
            現在ベータ版を公開中です。今後も継続的に拡大していきます
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-6 sm:gap-8"
        >
          {stats.map((stat, index) => {
            const StatCard = () => {
              const { count, ref } = useCountUp(stat.number)
              
              return (
                <motion.div
                  ref={ref}
                  variants={itemVariants}
                  className="bg-white rounded-xl xs:rounded-2xl p-4 xs:p-6 sm:p-8 shadow-lg hover:shadow-xl 
                           transition-all duration-300 text-center group hover:-translate-y-1 xs:hover:-translate-y-2"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className={`inline-flex items-center justify-center w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 
                             rounded-xl xs:rounded-2xl mb-4 xs:mb-6 ${stat.color} bg-opacity-10`}
                  >
                    <div className={`${stat.color} w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8`}>
                      {stat.icon}
                    </div>
                  </motion.div>

                  <div className="mb-3 xs:mb-4">
                    <div className="text-2xl xs:text-3xl sm:text-4xl font-bold text-gray-900 mb-1 xs:mb-2">
                      <span>
                        {count}{stat.suffix && <span className={`text-lg xs:text-xl sm:text-2xl ${stat.color}`}>{stat.suffix}</span>}
                      </span>
                    </div>
                    <h3 className="text-sm xs:text-base sm:text-lg font-semibold text-gray-900 mb-1 xs:mb-2">
                      {stat.label}
                    </h3>
                    <p className="text-gray-600 text-xs xs:text-sm">
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

      </div>
    </section>
  )
}

export default Statistics
