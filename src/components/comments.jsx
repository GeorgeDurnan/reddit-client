import { useSelector } from "react-redux";
import { Comment } from "./comment";
import { selectCommentsById } from "../features/commentsSlice";

export const Comments = ({id}) => {
    const comments = useSelector(state => selectCommentsById(state, id))
    if(comments == undefined){
        return <h1>Undefined</h1>
    }
    return (
        <>
            {comments.map(comment => (
                <Comment key={comment.id} comment={comment} />
            ))}
        </>
    );
};
