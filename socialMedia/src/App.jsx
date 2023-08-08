import { Post } from './components/Post'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'

import './global.css'
import styles from './App.module.css'

export function App() {
  

  return (
   <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
           author="Antonio Mendes"  
           content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quas quis, amet doloribus inventore labore natus sed. Cumque, minima molestiae nihil voluptatibus nisi, ut necessitatibus placeat laborum provident, veritatis tempora." 
          />
        </main>
      </div>
      
   </>
  )
}


