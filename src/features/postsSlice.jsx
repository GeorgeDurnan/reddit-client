import {createSlice} from '@reduxjs/toolkit';
const initialState = {
    posts: []
}
const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        addPosts: (state, action) =>{
            action.payload.forEach((element) => {
                state.posts.push(element)
            })
        }
    }
})
export default postsSlice.reducer