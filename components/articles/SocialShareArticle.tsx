'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Check } from 'lucide-react'

interface SocialShareArticleProps {
  title: string
  url: string
}

export default function SocialShareArticle({ title, url }: SocialShareArticleProps) {
  const [copied, setCopied] = useState(false)

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('コピーに失敗しました:', err)
    }
  }

  const shareButtons = [
    {
      name: 'Twitter',
      icon: '/icon_twitter_lg.svg',
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
      onClick: null
    },
    {
      name: 'Facebook',
      icon: '/icon_facebook_lg.svg',
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      onClick: null
    },
    {
      name: 'LINE',
      icon: '/icon_line_lg.svg',
      href: `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(url)}`,
      onClick: null
    },
    {
      name: 'リンク',
      icon: '/icon_link_lg.svg',
      href: null,
      onClick: handleCopyLink
    }
  ]

  return (
    <div className="c-snsShare">
      <section>
        <h2 className="c-snsShare__heading">
          <span className="c-snsShare__headingText">share</span>
        </h2>
        <p className="c-snsShare__lead">
          この記事がよかったらシェアお願いします！
        </p>
        <ul className="c-snsShare__list">
          {shareButtons.map((button, index) => (
            <li key={index}>
              {button.href ? (
                <a
                  href={button.href}
                  className="c-snsShare__button"
                  target="_blank"
                  rel="noopener noreferrer"
                  title={button.name}
                >
                  <Image
                    src={button.icon!}
                    alt={button.name}
                    width={64}
                    height={64}
                  />
                </a>
              ) : (
                <button
                  type="button"
                  onClick={button.onClick!}
                  className="c-snsShare__button"
                  title="リンクをコピー"
                >
                  {copied ? (
                    <Check className="w-12 h-12 text-green-600" />
                  ) : (
                    <Image
                      src={button.icon!}
                      alt="リンク"
                      width={64}
                      height={64}
                    />
                  )}
                </button>
              )}
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

