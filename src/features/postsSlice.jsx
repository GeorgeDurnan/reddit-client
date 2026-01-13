import {createSlice} from '@reduxjs/toolkit';
const initialState = {
    posts: [],
    subreddit: "gunners",
    subreddits: ["all", "pics", "gunners"]
}
const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        addPosts: (state, action) =>{
            action.payload.forEach((element) => {
                if(element.image == undefined){
                    return
                }
                state.posts.push(element)
            })
        },
        setSubreddit: (state, action) =>{
            state.subreddit = action.payload
        },
        addSubreddit: (state, action)=>{
            state.subreddits.push(action.payload)
        },
        removeSubreddit: (state, action) =>{
            state.subreddits.filter((element)=>{
                return element !== action.payload
            })
        }
    }
})
export default postsSlice.reducer
export const {addPosts, setSubreddit} = postsSlice.actions; 
export const selectPosts = (state) => state.posts.posts;
export const selectSubreddit = (state) => state.posts.subreddit;    