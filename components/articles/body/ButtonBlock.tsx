import Link from 'next/link'
import { ArticleBodyButton } from '@/types/article'

interface ButtonBlockProps {
  block: ArticleBodyButton
}

export default function ButtonBlock({ block }: ButtonBlockProps) {
  const isExternal = block.external_link
  const linkProps = isExternal
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {}

  return (
    <div className="mt-10 mb-10 text-center">
      {isExternal ? (
        <a
          href={block.button_link}
          className="kurukatsu-button kurukatsu-button--external inline-flex items-center justify-center gap-3 w-full max-w-[380px] text-white text-lg font-bold leading-[1.5] bg-primary hover:bg-primary/90 px-10 py-6 rounded-lg cursor-pointer transition-all duration-300 shadow-lg hover:shadow-xl"
          {...linkProps}
        >
          <span>{block.button_text}</span>
          <svg
            className="w-5 h-5 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
          </svg>
        </a>
      ) : (
        <Link
          href={block.button_link}
          className="kurukatsu-button kurukatsu-button--internal group inline-flex items-center justify-center gap-3 w-full max-w-[380px] text-white text-lg font-bold leading-[1.5] bg-primary hover:bg-primary/90 px-10 py-6 rounded-lg cursor-pointer transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <span>{block.button_text}</span>
          <svg
            className="w-5 h-5 text-white transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      )}
    </div>
  )
}

