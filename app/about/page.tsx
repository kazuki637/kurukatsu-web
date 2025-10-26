export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヘッダーセクション */}
      <section className="gradient-bg text-white py-16">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              運営会社について
            </h1>
            <p className="text-xl text-blue-100">
              クルカツを運営する私たちについて
            </p>
          </div>
        </div>
      </section>

      <div className="container-max px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">会社概要</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-gray-700 mb-2"><strong>会社名：</strong>クルカツ運営事務局</p>
                  <p className="text-gray-700 mb-2"><strong>設立：</strong>2023年4月</p>
                  <p className="text-gray-700 mb-2"><strong>代表：</strong>田中 太郎</p>
                  <p className="text-gray-700 mb-2"><strong>従業員数：</strong>15名</p>
                </div>
                <div>
                  <p className="text-gray-700 mb-2"><strong>所在地：</strong>東京都渋谷区××× 1-2-3</p>
                  <p className="text-gray-700 mb-2"><strong>電話：</strong>03-1234-5678</p>
                  <p className="text-gray-700 mb-2"><strong>メール：</strong>info@kurukatsu.com</p>
                </div>
              </div>
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
                  お気軽にお問い合わせください。
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>電話：</strong>03-1234-5678（平日 10:00-18:00）
                </p>
                <p className="text-gray-700">
                  <strong>メール：</strong>info@kurukatsu.com
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
