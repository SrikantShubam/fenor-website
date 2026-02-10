import { TinaMarkdown } from 'tinacms/dist/rich-text'
import { TinaMarkdownContent } from 'tinacms/dist/rich-text'
import styles from './textblock.module.css'

interface TextBlockProps {
  content?: TinaMarkdownContent
}

export default function TextBlock({ content }: TextBlockProps) {
  if (!content) return null
  // ← Here is where we hand the rich-text AST off to Tina’s renderer:
  return (
    <div className={styles.root}>
      <TinaMarkdown content={content} />
    </div>
  )
}
