import { useState } from 'react'
import { Comment } from '../Comment'
import styles from './styles.module.css'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/esm/locale/pt-BR/'


export function Post({ author, publishedAt, content }) {
  const [comments, setComments] = useState(['Bacana, ein?!'])

  const [newCommentText, setNewCommentText] = useState('')

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  function handleCreateNewComment() {
    event.preventDefault()

    setComments([...comments, newCommentText])
    setNewCommentText('')
  }

  function handleNewCommentChange() {
    setNewCommentText(event.target.value)
  }

  function OnDeleteComment(commentToDelete) {
    const commentsWithooutDeleteOne = comments.filter(comment => {
      return comment != commentToDelete
    })

    setComments(commentsWithooutDeleteOne)
  }

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

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          value={newCommentText}
          name="comment"
          onChange={handleNewCommentChange}
          placeholder="Deixe seu comentário"
          required
        />

        <button type={styles.buttonForm} disabled={newCommentText.length === 0}>Comentar</button>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return (
            <Comment key={comment} content={comment} OnDeleteComment={OnDeleteComment} />
          )
        })}
      </div>
    </article>
  )
}