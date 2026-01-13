import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from "react-redux";
import { addComments } from "../../features/commentsSlice";
import { useSelector } from "react-redux";
export function useComments(postId) {
    const [comments, setComments] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const response = await fetch("/comments/comments.json");
                const text = await response.json();
                const mappedComments = text[1].data.children.map((child) => {
                    const ins = child.data;
                    return {
                        id: uuidv4(),
                        author: ins.author,
                        text: ins.body,
                        upvotes: ins.ups,
                        downvotes: ins.downs,
                        replies: ins.replies

                    };
                });

                setComments(mappedComments);
                dispatch(addComments({postId, comments: mappedComments}));
            } catch (error) {
                console.error("Failed to fetch:", error);
            }
        };
        fetchComments();
    }, [postId, dispatch]);

    return comments;
}