import Link from 'next/link'

export default function ContactThanksPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-8 h-8 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          送信完了
        </h1>

        <p className="text-gray-600 mb-6 leading-relaxed">
          お問い合わせありがとうございました！<br />
          内容を確認してご連絡いたします。
        </p>

        <div>
          <Link
            href="/"
            className="inline-block bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200"
          >
            TOPに戻る
          </Link>
        </div>
      </div>
    </div>
  )
}

