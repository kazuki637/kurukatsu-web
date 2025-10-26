import { motion } from 'framer-motion'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヘッダーセクション */}
      <section className="gradient-bg text-white py-16">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              プライバシーポリシー
            </h1>
            <p className="text-xl text-blue-100">
              個人情報の取り扱いについて
            </p>
          </div>
        </div>
      </section>

      <div className="container-max px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">最終更新日：2024年3月1日</p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. 個人情報の定義</h2>
              <p className="text-gray-700 leading-relaxed">
                本プライバシーポリシーにおいて「個人情報」とは、個人情報保護法に定める個人情報を指し、
                生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日その他の記述等により
                特定の個人を識別することができるもの（他の情報と容易に照合することができ、
                それにより特定の個人を識別することができることとなるものを含みます。）を指します。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. 個人情報の収集方法</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                当社は、以下の方法により個人情報を収集いたします：
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>お問い合わせフォームからの情報提供</li>
                <li>サービス利用時の情報入力</li>
                <li>メールやお電話でのやり取り</li>
                <li>その他適法な方法による収集</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. 個人情報の利用目的</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                収集した個人情報は、以下の目的で利用いたします：
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>お問い合わせへの回答および対応</li>
                <li>サービスの提供および改善</li>
                <li>重要なお知らせの配信</li>
                <li>統計データの作成（個人を特定できない形式）</li>
                <li>法令に基づく対応</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. 個人情報の第三者提供</h2>
              <p className="text-gray-700 leading-relaxed">
                当社は、個人情報保護法その他の法令に定めのある場合を除き、
                あらかじめユーザーの同意を得ることなく、第三者に個人情報を提供することはありません。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. 個人情報の開示・訂正・削除</h2>
              <p className="text-gray-700 leading-relaxed">
                ユーザーは、当社の保有する自己の個人情報について、開示、訂正、削除を求めることができます。
                これらのご請求については、下記のお問い合わせ先までご連絡ください。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. 個人情報の安全管理</h2>
              <p className="text-gray-700 leading-relaxed">
                当社は、個人情報の漏洩、滅失または毀損の防止その他の個人情報の安全管理のために必要かつ適切な措置を講じます。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. お問い合わせ先</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2"><strong>クルカツ運営事務局</strong></p>
                <p className="text-gray-700 mb-2">メール：privacy@kurukatsu.com</p>
                <p className="text-gray-700">電話：03-1234-5678（平日 10:00-18:00）</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
