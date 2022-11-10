import style from './Comment.module.css'
import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'

export function Comment() {
  return (
    <div className={style.comment}>
      <Avatar hasBorder={false} src="https://github.com/victorlennon.png" alt="" />
      <div className={style.commentBox}>
        <div className={style.commentContent}>
          <header>
            <div className={style.authorAndTime}>
              <strong>Victor Lennon</strong>
              <time title="24 de outubro às 22:41" dateTime="2022-10-24 22:41:00">
                Cerca de 1h atrás
              </time>
            </div>
            <button title="Apagar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>Muito bom! Parabéns 👏👏👏</p>
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
