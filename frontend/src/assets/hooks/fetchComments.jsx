import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addComments } from "../../features/commentsSlice";
import { selectUrl } from "../../features/commentsSlice";
import { selectActivePost } from "../../features/postsSlice";
import { v4 as uuidv4 } from 'uuid';
export function useComments() {
    const dispatch = useDispatch()
    const url = useSelector(selectUrl)
    const activePost = useSelector(selectActivePost)
    useEffect(() => {
        async function fetchComments() {
            try {
                if (!url || !activePost) {
                    return
                }
                const response = await fetch(url);
                const text = await response.json();
                const commments = text[1].data.children.map((comment) => {
                    const data = comment.data
                    return {
                        id: uuidv4(),
                        body: data.body,
                        author: data.author,
                        upvotes: data.ups - data.downs,
                        replies: data.replies
                    }
                })
                dispatch(addComments({id: activePost, comments: commments}))
            } catch (e) {
                console.log("Failed to fetch json from" + url)
                return
            }


        }
        fetchComments()
    }, [activePost])

}
