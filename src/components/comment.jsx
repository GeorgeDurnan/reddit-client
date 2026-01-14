import { Comments } from "./comments";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addComments } from "../features/commentsSlice";
import { v4 as uuidv4 } from 'uuid';
import { selectCommentsById } from "../features/commentsSlice";
export const Comment = ({ comment }) => {
    const [showReplies, setShowReplies] = useState(false);
    const dispatch = useDispatch()
    const hasReplies = comment.replies !== "";
    const cont = useSelector(state => selectCommentsById(state, comment.id))
    const handleRepliesClick = () => {
        if (!cont) {

            const replies = comment.replies.data.children.map((reply) => {
                const data = reply.data

                return {
                    id: uuidv4(),
                    body: data.body,
                    author: data.author,
                    upvotes: data.ups - data.downs,
                    replies: data.replies
                }
            })
            dispatch(addComments({ id: comment.id, comments: replies }))
        }
        setShowReplies(!showReplies);
    }
    return (
        <>
            <h3>{comment.author}</h3>
            <h4>{comment.body}</h4>
            <h5>Upvotes: {comment.upvotes}</h5>
            <button onClick={handleRepliesClick} style={{ display: hasReplies ? 'block' : 'none' }}>Replies</button>
            <div style={{ display: showReplies ? 'block' : 'none' }}>
                <Comments id={comment.id} />
            </div>
        </>
    )
}