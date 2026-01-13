import {createSlice} from '@reduxjs/toolkit';
const initialState = {
    posts: [],
}
const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        addPosts: (state, action) =>{
            const newPosts = []
            action.payload.forEach((element) => {
                if(element.image == undefined){
                    return
                }
                newPosts.push(element)
            })
            state.posts = newPosts
        }
    }
})
export default postsSlice.reducer
export const {addPosts} = postsSlice.actions; 
export const selectPosts = (state) => state.posts.posts;