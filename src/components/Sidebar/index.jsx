import styles from './styles.module.css'
import { PencilLine } from 'phosphor-react';
import { Avatar } from '../Avatar';

export function Sidebar() {
  const urlBackground = "https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"

  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src={urlBackground} alt="" />

      <Avatar />

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu Perfil
        </a>
      </footer>
    </aside>
  )
}