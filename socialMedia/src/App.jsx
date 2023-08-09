import { Post } from './components/Post'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'

import './global.css'
import styles from './App.module.css'


const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/Antmendes.png',
      name: 'Antonio Mendes',
      role: 'Web Developer'
    },
    content:[
      { type: 'paragraph', content: 'Fala galera!!!'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portfólio. é um projeto que fiz no curso ignite. o nome do projeto é socialMedia/feed'},
      { type: 'link', content: 'social.media/feed'}
    ],
    publishedAt: new Date('2023-08-09 16:13:00')
  }, 
   {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/Antmendes.png',
      name: 'José Silva',
      role: 'Web Developer'
    },
    content:[
      { type: 'paragraph', content: 'Fala galera!!!'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portfólio. é um projeto que fiz no curso ignite. o nome do projeto é socialMedia/feed'},
      { type: 'link', content: 'social.media/feed'}
    ],
    publishedAt: new Date('2023-08-08 22:30:00')
  }
]


export function App() {
  

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
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
      
   </>
  )
}


