import { Posts } from './components/posts'
import { Subreddits } from './components/subreddits'
import { usePosts } from './assets/hooks/fetchPosts';
import { useComments } from './assets/hooks/fetchComments';
function App() {
  usePosts();
  useComments();
  return (
    <>
      <Subreddits />
      <Posts />
    </>
  )
}

export default App
