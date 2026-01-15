import { useSelector } from "react-redux";
import { Comment } from "./comment";
import { selectCommentsById } from "../features/commentsSlice";

export const Comments = ({id}) => {
    const comments = useSelector(state => selectCommentsById(state, id))
    console.log(comments)
    if(comments == undefined){
        return <h1>Loading...</h1>
    }
    return (
        <>
            {comments.map(comment => (
                <Comment key={comment.id} comment={comment} />
            ))}
        </>
    );
};
