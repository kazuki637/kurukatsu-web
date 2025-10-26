export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヘッダーセクション */}
      <section className="gradient-bg text-white py-16">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              利用規約
            </h1>
            <p className="text-xl text-blue-100">
              サービス利用に関する規約
            </p>
          </div>
        </div>
      </section>

      <div className="container-max px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">最終更新日：2024年3月1日</p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">第1条（適用）</h2>
              <p className="text-gray-700 leading-relaxed">
                本利用規約（以下「本規約」といいます。）は、クルカツ運営事務局（以下「当社」といいます。）が
                提供するサービス（以下「本サービス」といいます。）の利用条件を定めるものです。
                ユーザーの皆さま（以下「ユーザー」といいます。）には、本規約に従って、本サービスをご利用いただきます。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">第2条（利用登録）</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                本サービスにおいて、登録希望者が当社の定める方法によって利用登録を申請し、
                当社がこれを承認することによって、利用登録が完了するものとします。
              </p>
              <p className="text-gray-700 leading-relaxed">
                当社は、利用登録の申請者に以下の事由があると判断した場合、
                利用登録の申請を承認しないことがあり、その理由については一切の開示義務を負わないものとします。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">第3条（禁止事項）</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>法令または公序良俗に違反する行為</li>
                <li>犯罪行為に関連する行為</li>
                <li>本サービスの内容等、本サービスに含まれる著作権、商標権ほか知的財産権を侵害する行為</li>
                <li>当社、ほかのユーザー、またはその他第三者のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為</li>
                <li>本サービスによって得られた情報を商業的に利用する行為</li>
                <li>当社のサービスの運営を妨害するおそれのある行為</li>
                <li>不正アクセスをし、またはこれを試みる行為</li>
                <li>その他、当社が不適切と判断する行為</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">第4条（本サービスの提供の停止等）</h2>
              <p className="text-gray-700 leading-relaxed">
                当社は、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく
                本サービスの全部または一部の提供を停止または中断することができるものとします。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">第5条（保証の否認および免責事項）</h2>
              <p className="text-gray-700 leading-relaxed">
                当社は、本サービスに事実上または法律上の瑕疵（安全性、信頼性、正確性、完全性、有効性、
                特定の目的への適合性、セキュリティなどに関する欠陥、エラーやバグ、権利侵害などを含みます。）が
                ないことを明示的にも黙示的にも保証しておりません。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">第6条（サービス内容の変更等）</h2>
              <p className="text-gray-700 leading-relaxed">
                当社は、ユーザーへの事前の告知をもって、本サービスの内容を変更、追加または廃止することがあり、
                ユーザーはこれを承諾するものとします。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">第7条（利用規約の変更）</h2>
              <p className="text-gray-700 leading-relaxed">
                当社は以下の場合には、ユーザーの個別の同意を要せず、本規約を変更することができるものとします。
                本規約の変更がユーザーの一般の利益に適合するとき、または本規約の変更が本サービス利用契約の
                目的に反せず、かつ、変更の必要性、変更後の内容の相当性その他の変更に係る事情に照らして合理的なものであるとき。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">第8条（お問い合わせ先）</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2"><strong>クルカツ運営事務局</strong></p>
                <p className="text-gray-700 mb-2">メール：info@kurukatsu.com</p>
                <p className="text-gray-700">電話：03-1234-5678（平日 10:00-18:00）</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
