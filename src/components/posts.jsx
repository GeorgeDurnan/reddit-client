import React from "react";
import { usePosts } from "../assets/hooks/fetch";
import { Post } from "./post";
import { useSelector } from "react-redux";
import { selectPosts } from "../features/postsSlice";
export const Posts = () => {
   usePosts()
   const posts = useSelector(selectPosts);
   if (posts.length === 0) {
      return <div>Loading...</div>;
   }
   return (
      <div>
         {posts.map(post => (
            <Post key = {post.id}  post = {post}/>
         ))}
      </div>
   );
}