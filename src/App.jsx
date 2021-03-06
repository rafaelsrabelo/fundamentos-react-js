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
      { type: 'paragraph', content: 'Fala galeraa ๐' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. ร um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto รฉ DoctorCare ๐' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-05-18 16:30:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/victormilitao.png',
      author: 'Victor Militรฃo',
      role: 'Ruby on Rails Senior'
    },
    content: [
      { type: 'paragraph', content: 'OiPessoal ๐' },
      { type: 'paragraph', content: 'Oi ๐' },

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
                key={post.id}
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
