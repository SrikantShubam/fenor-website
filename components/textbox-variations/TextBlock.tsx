import { TinaMarkdown } from 'tinacms/dist/rich-text'
import { TinaMarkdownContent } from 'tinacms/dist/rich-text'

interface TextBlockProps {
  content?: TinaMarkdownContent
}

export default function TextBlock({ content }: TextBlockProps) {
  if (!content) return null
  // ← Here is where we hand the rich-text AST off to Tina’s renderer:
  return <TinaMarkdown content={content} />
}
