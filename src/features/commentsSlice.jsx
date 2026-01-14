import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    comments: {},
    url: "/comments/comments.json"
}
const commentsSlice = createSlice({
    name: "comments",
    initialState,
    reducers: {
        addComments: (state, action) => {
            state.comments[action.payload.id] = action.payload.comments
        },
        setUrl:(state, action) =>{
            if(state.url === action.payload){
                state.comments = {};
            }
            state.url = action.payload;
        },
    }
})
export default commentsSlice.reducer
export const { addComments, setUrl } = commentsSlice.actions
export const selectUrl = (state) => state.comments.url
export const selectCommentsById = (state, id) => state.comments.comments[id]
