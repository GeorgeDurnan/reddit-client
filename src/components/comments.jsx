import { selectCommentsByPostId } from "../features/commentsSlice";
import { useSelector } from "react-redux";
import { Comment } from "./comment";
import { useComments } from "../assets/hooks/fetchComments";
export const Comments = (props) =>{
    useComments(props.postId);
    const comments = useSelector(selectCommentsByPostId(props.postId))
    return (
        <>
            {comments.map(comment=>(
                <Comment key = {comment.id} comment = {comment}/>
            ))}
        </>
    )
}