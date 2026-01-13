import {createSlice, createSelector} from '@reduxjs/toolkit';
const initialState = {
    comments: {},
}
const commentsSlice = createSlice({
    name: "comments",
    initialState,
    reducers: {
        addComments: (state, action) =>{
            state.comments[action.payload.postId] = action.payload.comments
        }
    }
})
export default commentsSlice.reducer
export const {addComments} = commentsSlice.actions; 
export const selectComments = (state) => state.comments.comments;
export const selectCommentsByPostId = postId =>{
    console.log("selecting comments for postId: " + postId);
    return createSelector(
    [selectComments],
    comments => comments[postId] || []
  )}