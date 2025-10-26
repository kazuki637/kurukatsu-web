import Link from 'next/link'
import { ExternalLink, Smartphone, Download } from 'lucide-react'

const Footer = () => {
  const companyLinks = [
    { name: '運営会社について', href: '/about' },
    { name: 'プライバシーポリシー', href: '/privacy' },
    { name: '利用規約', href: '/terms' },
    { name: 'お問い合わせ', href: '/contact' },
  ]

  const serviceLinks = [
    { name: 'クルカツ記事', href: '/articles' },
    { name: '協賛案件', href: '/sponsors' },
    { name: 'インターン', href: '/internships' },
    { name: 'サイトマップ', href: '/sitemap' },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max section-padding">
        {/* メインフッターコンテンツ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* ブランド・アプリダウンロード */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-2xl tracking-tight">K</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">クルカツ</span>
                <span className="text-sm text-blue-100">大学生向けサークルアプリ</span>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              大学生が自分に合ったサークルを簡単に見つけ、<br />
              サークル運営者が効率的にメンバー募集・管理ができる<br />
              プラットフォームアプリです。
            </p>
            
            {/* アプリダウンロードリンク */}
            <div className="space-y-3">
              <p className="text-sm font-semibold text-gray-200 mb-3">
                アプリをダウンロード
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#"
                  className="inline-flex items-center justify-center bg-black hover:bg-gray-800 text-white py-3 px-4 rounded-lg transition-colors duration-200"
                >
                  <Download className="w-5 h-5 mr-2" />
                  <div className="text-left">
                    <div className="text-xs">Download on the</div>
                    <div className="text-sm font-semibold">App Store</div>
                  </div>
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center bg-black hover:bg-gray-800 text-white py-3 px-4 rounded-lg transition-colors duration-200"
                >
                  <Smartphone className="w-5 h-5 mr-2" />
                  <div className="text-left">
                    <div className="text-xs">GET IT ON</div>
                    <div className="text-sm font-semibold">Google Play</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* サービスリンク */}
          <div>
            <h3 className="text-lg font-semibold mb-4">サービス</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 会社情報 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">会社情報</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 法人向けCTAセクション */}
        <div className="bg-gray-800 rounded-xl p-6 mb-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">法人様向けサービス</h3>
            <p className="text-gray-300 mb-4">
              協賛案件の掲載、インターン求人、記事でのタイアップをご検討の企業様
            </p>
            <Link
              href="/contact"
              className="btn-secondary inline-flex items-center"
            >
              お問い合わせはこちら
              <ExternalLink className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>

        {/* コピーライト */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm">
              © 2024 クルカツ運営事務局. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
              >
                プライバシーポリシー
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
              >
                利用規約
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
