import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
export function getPosts(subreddit){
    const [posts, setPosts] = useState([]);

    useEffect(async ()=>{
        const response = await fetch(`https://www.reddit.com/r/${subreddit}/.json`);
        const redditData = await response.json();
        const posts = redditData.data.children.map((child) =>{
            const ins = child.data;
            return {
                id: uuidv4(),
                isVideo: ins.isVideo,
                thumbnail: ins.thumbnail,
                author: ins.author,
                url: ins.url,
                media : ins.media,
                title: ins.title,
                isMedia: ins.thumbnail !== "self",

            }
        })
        
        

    },[subreddit])
}