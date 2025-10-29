import { ArticleBodyEditor } from '@/types/article'

interface EditorBlockProps {
  block: ArticleBodyEditor
}

export default function EditorBlock({ block }: EditorBlockProps) {
  return (
    <div className="article-content">
      {block.editor ? (
        <div dangerouslySetInnerHTML={{ __html: block.editor }} />
      ) : (
        <p>コンテンツがありません</p>
      )}
    </div>
  )
}

