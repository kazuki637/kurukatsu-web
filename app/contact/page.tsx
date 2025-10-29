import Link from 'next/link'

export default function ContactPage() {
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
          {/* フォームセクション */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <form
              name="contact"
              method="POST"
              action="/contact/thanks"
              data-netlify="true"
              netlify-honeypot="bot-field"
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
