'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { 
  Mail, 
  Phone, 
  Building2, 
  User, 
  MessageSquare, 
  Send, 
  CheckCircle,
  AlertCircle,
  ExternalLink,
  Shield
} from 'lucide-react'
import Link from 'next/link'

interface ContactFormData {
  companyName: string
  department?: string
  name: string
  email: string
  phone: string
  inquiryType: string
  subject: string
  message: string
  privacyConsent: boolean
}

const inquiryTypes = [
  { value: 'sponsor', label: '協賛案件掲載希望' },
  { value: 'internship', label: 'インターン求人掲載希望' },
  { value: 'article', label: '記事取材・タイアップ希望' },
  { value: 'partnership', label: '事業提携・協業について' },
  { value: 'advertising', label: '広告・宣伝について' },
  { value: 'other', label: 'その他のお問い合わせ' }
]

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch
  } = useForm<ContactFormData>()

  const selectedInquiryType = watch('inquiryType')

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitError('')

    try {
      // 実際の実装では、APIエンドポイントに送信
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data)
      // })

      // デモ用の遅延
      await new Promise(resolve => setTimeout(resolve, 2000))

      // デモ用のランダムエラー（10%の確率）
      if (Math.random() < 0.1) {
        throw new Error('送信に失敗しました。しばらく経ってから再度お試しください。')
      }

      setSubmitSuccess(true)
      reset()
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'エラーが発生しました')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle className="w-8 h-8 text-green-600" />
          </motion.div>

          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            お問い合わせありがとうございます
          </h1>
          
          <p className="text-gray-600 mb-6 leading-relaxed">
            お問い合わせを承りました。<br />
            担当者より3営業日以内にご連絡させていただきます。<br />
            しばらくお待ちください。
          </p>

          <div className="space-y-3">
            <Link href="/" className="block btn-primary w-full">
              トップページに戻る
            </Link>
            <button
              onClick={() => {
                setSubmitSuccess(false)
                reset()
              }}
              className="block btn-outline w-full"
            >
              新しいお問い合わせ
            </button>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヘッダーセクション */}
      <section className="gradient-bg text-white py-16">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              お問い合わせ
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              法人様向けサービスに関するお問い合わせはこちらから
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container-max px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          {/* 説明セクション */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-xl shadow-lg p-8 mb-8"
          >
            <div className="flex items-center space-x-3 mb-6">
              <Building2 className="w-8 h-8 text-primary" />
              <h2 className="text-2xl font-bold text-gray-900">法人様向けお問い合わせフォーム</h2>
            </div>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              クルカツでは、大学生とのマッチング機会を提供する様々なサービスをご用意しています。
              協賛案件の掲載、インターン求人の掲載、記事でのタイアップなど、お気軽にご相談ください。
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">協賛案件掲載</h3>
                <p className="text-sm text-gray-600">サークル活動をサポートする協賛案件の掲載</p>
              </div>
              
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">インターン求人</h3>
                <p className="text-sm text-gray-600">優秀な大学生インターンの採用支援</p>
              </div>
              
              <div className="text-center p-4 bg-secondary/10 rounded-lg">
                <div className="w-12 h-12 bg-secondary/20 text-secondary rounded-lg flex items-center justify-center mx-auto mb-3">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">記事タイアップ</h3>
                <p className="text-sm text-gray-600">記事での取材・タイアップ企画</p>
              </div>
            </div>
          </motion.div>

          {/* フォームセクション */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* 会社情報 */}
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">会社情報</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      会社名 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      {...register('companyName', { 
                        required: '会社名は必須です' 
                      })}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 ${
                        errors.companyName ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="株式会社○○○○"
                    />
                    {errors.companyName && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.companyName.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      部署名
                    </label>
                    <input
                      type="text"
                      {...register('department')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                      placeholder="営業部、人事部など"
                    />
                  </div>
                </div>
              </div>

              {/* 担当者情報 */}
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">担当者情報</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      お名前 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      {...register('name', { 
                        required: 'お名前は必須です' 
                      })}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 ${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="山田 太郎"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      電話番号 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      {...register('phone', { 
                        required: '電話番号は必須です',
                        pattern: {
                          value: /^[0-9-+().\s]+$/,
                          message: '正しい電話番号を入力してください'
                        }
                      })}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 ${
                        errors.phone ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="03-1234-5678"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mt-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    メールアドレス <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    {...register('email', { 
                      required: 'メールアドレスは必須です',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: '正しいメールアドレスを入力してください'
                      }
                    })}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="example@company.co.jp"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              {/* お問い合わせ内容 */}
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">お問い合わせ内容</h3>
                
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    お問い合わせ種別 <span className="text-red-500">*</span>
                  </label>
                  <div className="grid md:grid-cols-2 gap-3">
                    {inquiryTypes.map((type) => (
                      <label key={type.value} className="flex items-center p-3 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors duration-200">
                        <input
                          type="radio"
                          value={type.value}
                          {...register('inquiryType', { 
                            required: 'お問い合わせ種別を選択してください' 
                          })}
                          className="w-4 h-4 text-primary border-gray-300 focus:ring-primary"
                        />
                        <span className="ml-3 text-sm font-medium text-gray-900">{type.label}</span>
                      </label>
                    ))}
                  </div>
                  {errors.inquiryType && (
                    <p className="mt-2 text-sm text-red-600 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.inquiryType.message}
                    </p>
                  )}
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    件名 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    {...register('subject', { 
                      required: '件名は必須です' 
                    })}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 ${
                      errors.subject ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder={
                      selectedInquiryType === 'sponsor' ? '協賛案件掲載について' :
                      selectedInquiryType === 'internship' ? 'インターン求人掲載について' :
                      selectedInquiryType === 'article' ? '記事タイアップについて' :
                      'お問い合わせの件名を入力してください'
                    }
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    お問い合わせ内容 <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={6}
                    {...register('message', { 
                      required: 'お問い合わせ内容は必須です',
                      minLength: {
                        value: 10,
                        message: '10文字以上で入力してください'
                      }
                    })}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 resize-none ${
                      errors.message ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="具体的なご要望やご質問がございましたら、詳しくお聞かせください。&#10;&#10;例：&#10;・ご希望の協賛内容&#10;・対象となるサークルの条件&#10;・予算規模&#10;・実施時期&#10;・その他ご質問など"
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.message.message}
                    </p>
                  )}
                </div>
              </div>

              {/* プライバシーポリシー同意 */}
              <div className="pb-6">
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    {...register('privacyConsent', { 
                      required: 'プライバシーポリシーへの同意が必要です' 
                    })}
                    className={`w-5 h-5 text-primary border-2 rounded focus:ring-primary mt-0.5 ${
                      errors.privacyConsent ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  <div className="flex-1 text-sm">
                    <span className="text-gray-700">
                      <Link href="/privacy" className="text-primary hover:underline" target="_blank">
                        プライバシーポリシー
                        <ExternalLink className="w-3 h-3 inline ml-1" />
                      </Link>
                      に同意します <span className="text-red-500">*</span>
                    </span>
                    {errors.privacyConsent && (
                      <p className="mt-1 text-red-600 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.privacyConsent.message}
                      </p>
                    )}
                  </div>
                </label>

                <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <Shield className="w-5 h-5 text-blue-600 mt-0.5" />
                    <div className="text-sm text-blue-800">
                      <p className="font-semibold mb-1">個人情報の取り扱いについて</p>
                      <p>ご提供いただいた個人情報は、お問い合わせへの回答およびサービスのご案内にのみ使用し、適切に管理いたします。</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* エラーメッセージ */}
              {submitError && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-50 border border-red-200 rounded-lg p-4"
                >
                  <div className="flex items-center space-x-2">
                    <AlertCircle className="w-5 h-5 text-red-600" />
                    <p className="text-red-800 font-medium">送信エラー</p>
                  </div>
                  <p className="text-red-700 text-sm mt-1">{submitError}</p>
                </motion.div>
              )}

              {/* 送信ボタン */}
              <div className="pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 disabled:bg-gray-400 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>送信中...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>お問い合わせを送信</span>
                    </>
                  )}
                </button>
                
                <p className="text-xs text-gray-500 text-center mt-3">
                  送信後、3営業日以内にご連絡させていただきます
                </p>
              </div>
            </form>
          </motion.div>

          {/* 追加情報 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 bg-gradient-to-r from-primary to-blue-600 text-white rounded-xl p-8 text-center"
          >
            <h3 className="text-xl font-bold mb-4">お急ぎの場合は</h3>
            <p className="mb-6 opacity-90">
              緊急のご相談や詳細な打ち合わせをご希望の場合は、<br />
              直接お電話でのお問い合わせも承っております。
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span className="font-semibold">03-1234-5678</span>
              </div>
              <div className="text-sm opacity-80">
                平日 10:00-18:00
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
