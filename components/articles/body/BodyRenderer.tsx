import { ArticleBodyItem } from '@/types/article'
import ButtonBlock from './ButtonBlock'
import CarouselBlock from './CarouselBlock'
import EditorBlock from './EditorBlock'

interface BodyRendererProps {
  body: ArticleBodyItem[]
}

export default function BodyRenderer({ body }: BodyRendererProps) {
  if (!body || body.length === 0) {
    return <p>コンテンツがありません</p>
  }

  return (
    <div className="article-content">
      {body.map((block, index) => {
        switch (block.fieldId) {
          case 'button':
            return <ButtonBlock key={index} block={block} />
          case 'carousel':
            return <CarouselBlock key={index} block={block} />
          case 'editor':
            return <EditorBlock key={index} block={block} />
          default:
            return null
        }
      })}
    </div>
  )
}

