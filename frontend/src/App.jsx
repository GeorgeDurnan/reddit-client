import { Posts } from './components/posts'
import { Subreddits } from './components/subreddits'
import { usePosts } from './assets/hooks/fetchPosts';
import { useComments } from './assets/hooks/fetchComments';
import { Header } from './components/header';
function App() {
  usePosts();
  useComments();
  return (
    <>
      <Header/>
      <div className="wrapper">
        <Posts className="left"/>
        <Subreddits className="right"/>
      </div>
    </>
  )
}

export default App
