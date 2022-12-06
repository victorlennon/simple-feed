import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

// export function Post(props) { changing to destructuring below
export function Post({ author, publishedAt }) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
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
      <form className={styles.commentForm} action="">
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}
