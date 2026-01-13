import { configureStore } from '@reduxjs/toolkit'
import postsReducer from '../features/postsSlice'
import subredditsReducer from '../features/subredditsSlice'
import commentsReducer from '../features/commentsSlice'
export default configureStore({
  reducer: {
    posts: postsReducer,
    subreddits: subredditsReducer,
    comments: commentsReducer
  },
})