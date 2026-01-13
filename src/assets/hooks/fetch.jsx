import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from "react-redux";
import { addPosts } from "../../features/postsSlice";
import { useSelector } from "react-redux";
import { selectSubreddit } from "../../features/postsSlice";
export function usePosts() {
    const [posts, setPosts] = useState([]);
    const subreddit = useSelector(selectSubreddit);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch("../../../public/subreddits/" + subreddit + ".json");
                let redditData = await response.text();
                console.log("Here is the data")
                console.log(redditData);
                console.log("Here is the data")
                redditData = JSON.parse(redditData);
                const mappedPosts = redditData.data.children.map((child) => {
                    const ins = child.data;
                    const image =
                        ins.preview?.images?.[0]?.source?.url?.replaceAll("&amp;", "&");
                    console.log(image)
                    return {
                        id: uuidv4(),
                        isVideo: ins.is_video,
                        thumbnail: ins.thumbnail,
                        author: ins.author,
                        url: ins.url,
                        media: ins.media,
                        title: ins.title,
                        isMedia: ins.thumbnail !== "self",
                        text: ins.selftext,
                        image: image
                    };
                });

                setPosts(mappedPosts);
                dispatch(addPosts(mappedPosts));
            } catch (error) {
                console.error("Failed to fetch:", error);
            }
        };
        fetchPosts();
    }, [subreddit, dispatch]);

    return posts;
}