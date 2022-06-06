import styles from './styles.module.css'

export function Avatar() {
  const urlAvatar = "https://github.com/rafaelsrabelo.png"

  return (
    <div className={styles.profile}>
      <img className={styles.avatar} src={urlAvatar} alt="" />
      <strong>Rafael Rabelo</strong>
      <span>Web Developer</span>
    </div>
  )
}