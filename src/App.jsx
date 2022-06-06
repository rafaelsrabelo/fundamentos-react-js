import { Header } from "./components/Header"
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css';
import './styles/global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/rafaelsrabelo.png',
      author: 'Rafael Rabelo',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-05-18 16:30:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/victormilitao.png',
      author: 'Victor Militão',
      role: 'Ruby on Rails Senior'
    },
    content: [
      { type: 'paragraph', content: 'OiPessoal 👋' },
      { type: 'paragraph', content: 'Oi 🚀' },

      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-06-5 16:30:00'),
  }
]

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                author={post.author}
                content={post.content}
                avatarUrl={post.avatarUrl}
                role={post.role}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}

export default App
