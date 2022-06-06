import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './styles.module.css'

export function Comment(props) {
  const urlAvatar = "https://github.com/rafaelsrabelo.png"

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

            <button title='Deletar'>
              <Trash size={24} />
            </button>
          </header>
          <p>
            {props.content}
          </p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}