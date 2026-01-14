import {createSlice} from '@reduxjs/toolkit'
const initialState = {
    posts: [],
    activePost: null
}
const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        addPosts: (state, action) =>{
            state.posts = action.payload
            
        },
        changeActivePost: (state,action)=>{
            state.activePost = action.payload

        }
    }
})
export default postsSlice.reducer
export const {addPosts, changeActivePost} = postsSlice.actions 
export const selectPosts = (state) => state.posts.posts
export const selectActivePost = (state) => state.posts.activePost 