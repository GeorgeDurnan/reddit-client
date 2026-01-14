import { Comments } from "./comments";
import { selectActivePost } from "../features/postsSlice";
import { changeActivePost } from "../features/postsSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setUrl } from "../features/commentsSlice";
export const Footer = ({ post }) => {
    const activePost = useSelector(selectActivePost)
    const dispatch = useDispatch()
    const showComments = activePost === post.id;
    const handleClick = () => {
        if (activePost === post.id) {
            dispatch(changeActivePost(null))
        } else {
            dispatch(changeActivePost(post.id))
            dispatch(setUrl((post.url)))
            console.log(post.url)
        }
        console.log("activePost:", activePost, typeof activePost);
        console.log("post.id:", post.id, typeof post.id);
    }
    return (
        <>
            <h4>{post.author}</h4>
            <button onClick={handleClick}>Show comments</button>
            <div style={{ display: showComments ? 'block' : 'none' }}>
                <Comments id={post.id}/>
            </div>
        </>
    )
}