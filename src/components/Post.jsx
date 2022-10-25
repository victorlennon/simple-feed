import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/victorlennon.png" />
          <div className={styles.authorInfo}>
            <strong>Victor Lennon</strong>
            <span>Web Developer</span>
          </div>
          <time title="24 de outubro às 22:41" dateTime="2022-10-24 22:41:00">
            Publicado há 1 hora
          </time>
        </div>
      </header>
      <div className={styles.content}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi tempore quidem molestiae architecto, sint
          corrupti ab maxime omnis! Cum rerum quisquam harum odio laboriosam. Repudiandae nulla officia quam reiciendis
          rerum.
        </p>
        <p>
          <a href="">link.com.br</a>
        </p>
        <p>
          <a href="">#lorem #ipsum</a>
        </p>
      </div>
    </article>
  )
}
