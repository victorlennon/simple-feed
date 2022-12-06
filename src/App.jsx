import { Post } from './components/Post'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import './global.css'
import styles from './App.module.css'

//simulating backend response for posts
const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @ Rocketseat'
    },
    content: [
      { Type: 'paragraph', content: 'This is the first line' },
      { Type: 'paragraph', content: 'This is the second line' },
      { Type: 'paragraph', content: 'This is the third line' }
    ],
    publishedAt: new Date('2022-05-03 20:00:01')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator @ Rocketseat'
    },
    content: [
      { Type: 'paragraph', content: 'This is the first line' },
      { Type: 'paragraph', content: 'This is the second line' },
      { Type: 'paragraph', content: 'This is the third line' }
    ],
    publishedAt: new Date('2022-05-10 20:00:01')
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
            return <Post author={post.author} content={post.content} publishedAt={post.publishedAt} />
          })}
        </main>
      </div>
    </>
  )
}
