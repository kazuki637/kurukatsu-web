import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  const otherLinks = [
    { name: '運営者について', href: '/about' },
    { name: 'お問い合わせ', href: '/contact' },
  ]

  const serviceLinks = [
    { name: 'クルカツ記事', href: '/articles' },
    { name: '協賛案件', href: '/sponsors' },
    { name: 'インターン', href: '/internships' },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max section-padding">
        {/* メインフッターコンテンツ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 xs:gap-10 sm:gap-8 mb-8 xs:mb-12">
          {/* ブランド・アプリダウンロード */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center mb-6">
              <Image
                src="/icon.png"
                alt="クルカツ - 大学生向けサークルアプリ"
                width={64}
                height={64}
                className="h-14 xs:h-16 w-auto object-contain rounded-xl"
                unoptimized={true}
              />
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              大学生が自分に合ったサークルを簡単に見つけ、<br />
              サークル運営者が効率的にメンバー募集・管理ができる<br />
              プラットフォームアプリです。
            </p>
            {/* SNSリンク */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/kurukatsu_app?igsh=bmRhcTk3bWsyYmVj&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center gap-2"
                aria-label="Instagram"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <span className="text-sm">Instagram</span>
              </a>
            </div>
          </div>

          {/* サービスリンク */}
          <div className="mb-8 sm:mb-0">
            <h3 className="text-lg xs:text-xl font-semibold mb-4 xs:mb-6">サービス</h3>
            <ul className="space-y-2 xs:space-y-1">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="block py-2 px-2 -mx-2 text-gray-300 hover:text-white hover:bg-gray-800 
                             rounded transition-all duration-200 text-sm xs:text-base
                             min-h-[44px] flex items-center touch-manipulation"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* その他 */}
          <div>
            <h3 className="text-lg xs:text-xl font-semibold mb-4 xs:mb-6">その他</h3>
            <ul className="space-y-2 xs:space-y-1">
              {otherLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="block py-2 px-2 -mx-2 text-gray-300 hover:text-white hover:bg-gray-800 
                             rounded transition-all duration-200 text-sm xs:text-base
                             min-h-[44px] flex items-center touch-manipulation"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* コピーライト */}
        <div className="border-t border-gray-700 pt-6 xs:pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-center">
            <p className="text-gray-400 text-xs xs:text-sm text-center">
              © 2025 クルカツ運営. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
