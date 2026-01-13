import {createSlice} from '@reduxjs/toolkit';
const initialState = {
    subreddit: "all",
    subreddits: ["all", "pics", "gunners"]
}
const subredditsSlice = createSlice({
    name: "subreddits",
    initialState,
    reducers: {
        setSubreddit: (state, action) =>{
            state.subreddit = action.payload
            console.log(state.subreddit)
        },
        addSubreddit: (state, action)=>{
            state.subreddits.push(action.payload)
        },
        removeSubreddit: (state, action) =>{
            state.subreddits = state.subreddits.filter((element)=>{
                return element !== action.payload
            })
        }
    }
})
export default subredditsSlice.reducer
export const {setSubreddit, removeSubreddit, addSubreddit} = subredditsSlice.actions; 
export const selectSubreddit = (state) => state.subreddits.subreddit;
export const selectSubreddits = (state) => state.subreddits.subreddits;    