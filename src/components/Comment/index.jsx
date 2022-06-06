import { useState } from 'react'
import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './styles.module.css'

export function Comment({ content, OnDeleteComment }) {
  const urlAvatar = "https://github.com/rafaelsrabelo.png"
  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComent() {
    OnDeleteComment(content)
  }

  function handleAddLike() {
    setLikeCount(likeCount + 1)
  }

  return (
    <div className={styles.comment}>
      <img className={styles.avatar} src={urlAvatar} alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Rafael Rabelo</strong>

              <time title='5 de maio as 08:15' dateTime="2022-05-18 08:15:20">Cerca de 1h atrás</time>
            </div>

            <button title='Deletar' onClick={handleDeleteComent}>
              <Trash size={24} />
            </button>
          </header>
          <p>
            {content}
          </p>
        </div>

        <footer>
          <button onClick={setLikeCount}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}