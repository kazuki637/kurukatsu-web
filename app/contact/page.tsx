'use client'

import Link from 'next/link'
import { Mail, Building2, MessageSquare } from 'lucide-react'
import { FormEvent } from 'react'

export default function ContactPage() {
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const myForm = event.target as HTMLFormElement
    const formData = new FormData(myForm)

    // form-nameを確実に含める
    if (!formData.has('form-name')) {
      formData.append('form-name', 'contact')
    }

    // デバッグ用：送信データをログ出力
    const encodedData = new URLSearchParams(formData as any).toString()
    console.log('Sending form data to Netlify:', encodedData)

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: encodedData
      })

      // レスポンスの詳細をログ出力
      console.log('Response status:', response.status)
      console.log('Response statusText:', response.statusText)
      console.log('Response ok:', response.ok)

      const responseText = await response.text()
      console.log('Response body:', responseText)

      if (response.ok) {
        // デバッグ用：リダイレクトを一時的にオフ
        console.log('✅ フォーム送信成功！')
        console.log('ログを確認してから、手動でリダイレクトしてください')
        alert('送信成功しました！コンソールログを確認してください。\n確認後、手動で /contact/thanks にアクセスしてください。')
        
        // リダイレクト（デバッグ時はコメントアウト）
        // window.location.href = '/contact/thanks'
      } else {
        console.error('Form submission failed:', {
          status: response.status,
          statusText: response.statusText,
          body: responseText
        })
        alert(`送信に失敗しました（ステータス: ${response.status}）。しばらく経ってから再度お試しください。`)
      }
    } catch (error) {
      console.error('Form submission error:', error)
      alert('送信に失敗しました。ネットワーク接続を確認して、再度お試しください。')
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヘッダーセクション */}
      <section className="gradient-bg text-white py-16">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              お問い合わせ
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              法人様向けサービスに関するお問い合わせはこちらから
            </p>
          </div>
        </div>
      </section>

      <div className="container-max px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          {/* 説明セクション */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
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
          </div>

          {/* フォームセクション */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Netlify Forms用の非表示フィールド */}
              <input type="hidden" name="form-name" value="contact" />
              <div style={{ display: 'none' }}>
                <label>
                  このフィールドは空のままでお願いします:
                  <input name="bot-field" />
                </label>
              </div>

              <dl className="space-y-6">
                {/* 会社名 */}
                <div>
                  <dt className="mb-2">
                    <label htmlFor="companyName" className="text-sm font-semibold text-gray-700">
                      会社名 <span className="text-red-500">*</span>
                    </label>
                  </dt>
                  <dd>
                    <input
                      type="text"
                      name="会社名"
                      id="companyName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </dd>
                </div>

                {/* お名前 */}
                <div>
                  <dt className="mb-2">
                    <label htmlFor="name" className="text-sm font-semibold text-gray-700">
                      お名前 <span className="text-red-500">*</span>
                    </label>
                  </dt>
                  <dd>
                    <input
                      type="text"
                      name="お名前"
                      id="name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </dd>
                </div>

                {/* 電話番号 */}
                <div>
                  <dt className="mb-2">
                    <label htmlFor="phone" className="text-sm font-semibold text-gray-700">
                      電話番号 <span className="text-red-500">*</span>
                    </label>
                  </dt>
                  <dd>
                    <input
                      type="tel"
                      name="電話番号"
                      id="phone"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </dd>
                </div>

                {/* メールアドレス */}
                <div>
                  <dt className="mb-2">
                    <label htmlFor="email" className="text-sm font-semibold text-gray-700">
                      メールアドレス <span className="text-red-500">*</span>
                    </label>
                  </dt>
                  <dd>
                    <input
                      type="email"
                      name="メールアドレス"
                      id="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </dd>
                </div>

                {/* お問い合わせ種別 */}
                <div>
                  <dt className="mb-2">
                    <label className="text-sm font-semibold text-gray-700">
                      お問い合わせ種別 <span className="text-red-500">*</span>
                    </label>
                  </dt>
                  <dd>
                    <div className="grid md:grid-cols-2 gap-3">
                      <label className="flex items-center p-3 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input
                          type="radio"
                          name="お問い合わせ種別"
                          value="協賛案件掲載希望"
                          required
                          className="w-4 h-4 text-primary border-gray-300 focus:ring-primary"
                        />
                        <span className="ml-3 text-sm font-medium text-gray-900">協賛案件掲載希望</span>
                      </label>
                      <label className="flex items-center p-3 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input
                          type="radio"
                          name="お問い合わせ種別"
                          value="インターン求人掲載希望"
                          required
                          className="w-4 h-4 text-primary border-gray-300 focus:ring-primary"
                        />
                        <span className="ml-3 text-sm font-medium text-gray-900">インターン求人掲載希望</span>
                      </label>
                      <label className="flex items-center p-3 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input
                          type="radio"
                          name="お問い合わせ種別"
                          value="記事取材・タイアップ希望"
                          required
                          className="w-4 h-4 text-primary border-gray-300 focus:ring-primary"
                        />
                        <span className="ml-3 text-sm font-medium text-gray-900">記事取材・タイアップ希望</span>
                      </label>
                      <label className="flex items-center p-3 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input
                          type="radio"
                          name="お問い合わせ種別"
                          value="その他のお問い合わせ"
                          required
                          className="w-4 h-4 text-primary border-gray-300 focus:ring-primary"
                        />
                        <span className="ml-3 text-sm font-medium text-gray-900">その他のお問い合わせ</span>
                      </label>
                    </div>
                  </dd>
                </div>

                {/* 件名 */}
                <div>
                  <dt className="mb-2">
                    <label htmlFor="subject" className="text-sm font-semibold text-gray-700">
                      件名 <span className="text-red-500">*</span>
                    </label>
                  </dt>
                  <dd>
                    <input
                      type="text"
                      name="件名"
                      id="subject"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </dd>
                </div>

                {/* お問い合わせ内容 */}
                <div>
                  <dt className="mb-2">
                    <label htmlFor="message" className="text-sm font-semibold text-gray-700">
                      お問い合わせ内容 <span className="text-red-500">*</span>
                    </label>
                  </dt>
                  <dd>
                    <textarea
                      name="お問い合わせ内容"
                      id="message"
                      rows={6}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                    ></textarea>
                  </dd>
                </div>
              </dl>

              {/* 送信ボタン */}
              <div className="pt-6 text-center">
                <button
                  type="submit"
                  className="bg-primary hover:bg-primary/90 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200"
                >
                  送信する
                </button>
                <p className="text-xs text-gray-500 mt-3">
                  送信後、3営業日以内にご連絡させていただきます
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
