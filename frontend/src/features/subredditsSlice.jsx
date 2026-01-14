import {createSlice} from '@reduxjs/toolkit';
const initialState = {
    subreddit: "all",
    subreddits: ["all", "pics", "gunners"],
    icons: {"all": "https://e7.pngegg.com/pngimages/288/103/png-clipart-reddit-computer-icons-logo-others-miscellaneous-orange.png", "pics": "https://b.thumbs.redditmedia.com/VZX_KQLnI1DPhlEZ07bIcLzwR1Win808RIt7zm49VIQ.png", "gunners": "https://b.thumbs.redditmedia.com/ZiAEtqQcDoI72L601xFToVXnp-VRwALa1ZviwnkZ3jg.png"}
}
const subredditsSlice = createSlice({
    name: "subreddits",
    initialState,
    reducers: {
        setSubreddit: (state, action) =>{
            state.subreddit = action.payload
        },
        addSubreddit: (state, action)=>{
            state.subreddits.push(action.payload.name)
            state.icons[action.payload.name] = action.payload.icon
        },
        removeSubreddit: (state, action) =>{
            state.subreddits = state.subreddits.filter((element)=>{
                return element !== action.payload
            })
            delete state.icons[action.payload]
        }
    }
})
export default subredditsSlice.reducer
export const {setSubreddit, removeSubreddit, addSubreddit} = subredditsSlice.actions; 
export const selectSubreddit = (state) => state.subreddits.subreddit;
export const selectSubreddits = (state) => state.subreddits.subreddits;
export const selectIcon = (state, subreddit) => state.subreddits.icons[subreddit]