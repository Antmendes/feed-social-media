import { Post } from './Post'
import { Header } from './components/Header'

import './global.css'

export function App() {
  

  return (
   <>
      <Header />
      <Post 
        author="Antonio Mendes"  
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quas quis, amet doloribus inventore labore natus sed. Cumque, minima molestiae nihil voluptatibus nisi, ut necessitatibus placeat laborum provident, veritatis tempora." 
      />
   </>
  )
}


