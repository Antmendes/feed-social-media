import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'

export function Comment({ content, onDeleteComment }) {
    function handleDeleteComment() {
        onDeleteComment(content)
    }


    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/Antmendes.png" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                  <header>
                    <div className={styles.authorAndTime}>
                        <strong>Antonio Mendes</strong>
                        <time title="09 de agosto às 09:07h" dateTime='2023-08-09 09:07:25'>Cerca de 1h atrás</time>
                    </div>

                    <button onClick={handleDeleteComment} title='Deletar comentário'>
                        <Trash size={24}/>
                    </button>
                  </header>

                  <p>{content}</p>
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