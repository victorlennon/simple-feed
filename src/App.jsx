import { Post } from './Post'
import { Header } from './components/Header'
import './global.css'

export function App() {
  return (
    <>
      <Header />
      <Post author="Victor" content="lorem ipsum dolor sit amet, consectetur adipisicing el" />
      <Post author="Fulano" content="lorem ipsum dolor sit amet, con" />
    </>
  )
}
