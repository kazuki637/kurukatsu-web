export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヘッダーセクション */}
      <section className="gradient-bg text-white py-16">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              運営者について
            </h1>
            <p className="text-xl text-blue-100">
              クルカツを運営する個人事業主について
            </p>
          </div>
        </div>
      </section>

      <div className="container-max px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                クルカツは、早稲田大学に在学する学生が運営しているサービスです。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">ミッション</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                「大学生活をもっと充実させる」をミッションに、サークル活動を通じて学生同士のつながりを生み出し、
                学生時代にしかできない貴重な体験と成長の機会を提供します。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">事業内容</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>大学生向けサークルマッチングプラットフォーム「クルカツ」の開発・運営</li>
                <li>サークル活動に関する情報メディアの運営</li>
                <li>企業とサークルをつなぐ協賛案件のマッチングサービス</li>
                <li>学生向けインターンシップ求人の紹介サービス</li>
                <li>大学生のキャリア支援事業</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">お問い合わせ</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  サービスに関するご質問、ご相談、取材のお申し込みなどは、
                  <a href="/contact" className="text-primary hover:underline font-semibold">お問い合わせフォーム</a>よりお気軽にご連絡ください。
                </p>
                <p className="text-gray-700">
                  対応時間：平日 10:00-18:00（土日祝日を除く）
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
