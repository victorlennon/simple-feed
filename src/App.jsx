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
          <Post author="Victor" content="lorem ipsum dolor sit amet, consectetur adipisicing el" />
          <Post
            author="Fulano"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur incidunt earum vitae deserunt aut esse illo officiis aspernatur ratione quidem fugiat voluptate dolorem eius accusamus, odit provident recusandae quis quas.
          Asperiores laudantium illo tenetur harum quibusdam hic natus nulla ex! Cum deleniti odit, id similique vitae quasi libero minus laboriosam optio. Quidem aliquam sed soluta vitae reiciendis odio, accusantium explicabo?
          Optio assumenda reiciendis, vero deserunt veritatis accusamus impedit quod nostrum eum id necessitatibus ea deleniti quas velit eligendi fugit, et molestiae? Totam dolorem qui magni reiciendis illum fuga quaerat rerum!"
          />
        </main>
      </div>
    </>
  )
}
