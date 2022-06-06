import { Comment } from '../Comment'
import styles from './styles.module.css'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/esm/locale/pt-BR/'

const comments = [
  1,
  2,
  3,
]

export function Post({ author, publishedAt, content }) {
  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src={author.avatarUrl} alt="" />

          <div className={styles.authorInfo}>
            <strong>{author.author}</strong>
            <p>{author.role}</p>
          </div>

          <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
            {publishedDateRelativeToNow}
          </time>
        </div>

      </header>

      <div className={styles.content}>
        {content.map(line => {
          if (line.type === 'paragraph') {
            return <p>{line.content}</p>
          } else if (line.type === 'link') {
            return <p><a href='#'>{line.content}</a></p>
          }
        })}
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe seu comentário" />

        <button type={styles.buttonForm}>Comentar</button>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return (
            <Comment />
          )
        })}
      </div>
    </article>
  )
}