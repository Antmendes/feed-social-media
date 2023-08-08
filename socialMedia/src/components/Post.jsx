import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}> 
          <header>
            <div className={styles.author}>
                <img className={styles.avatar} src="https://github.com/Antmendes.png" />
                <div className={styles.authorInfo}>
                    <strong>Antonio Mendes</strong>
                    <span>Web Developer</span>
                </div>
            </div>

            <time title='08 de agosto às 18:50' dateTime='2023-08-08 18:50:30'>publicado há 1h</time>
          </header>

          <div className={styles.content}>
            <p>Fala galera!!</p>
            <p>Acabei de subir mais um projeto no meu portfólio. é um projeto que fiz no curso ignite. o nome do projeto é socialMedia/feed </p>
            <p><a href="">social.media/feed</a></p>
            <p>
                <a href="">#novoprojeto</a>{' '}
                <a href="">#react</a>
                </p>
          </div>
        </article>
    )
}