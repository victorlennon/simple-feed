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
      role: 'CTO @ Rocketseat',
    },
    content: [
      { type: 'paragraph', content: 'This is the first line' },
      { type: 'paragraph', content: 'This is the second line' },
      { type: 'link', content: 'https://github.com/diego3g.png' },
    ],
    publishedAt: new Date('2022-05-03 20:01:01'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator @ Rocketseat',
    },
    content: [
      { type: 'paragraph', content: 'This is the first line' },
      { type: 'paragraph', content: 'This is the second line' },
      { type: 'paragraph', content: 'This is the third line' },
    ],
    publishedAt: new Date('2022-12-7 13:41:01'),
  },
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
