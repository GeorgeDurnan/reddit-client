import { useEffect, useState } from "react";
import { Footer } from "./commentFooter";
export const Post = ({ post }) => {
   const [displayPost, setDisplayPost] = useState(false)
   const [displayText, setDisplayText] = useState(true)
   useEffect(() => {
      if (post.text.length > 200) {
         setDisplayText(false)
      }
   }, [post.text])

   return <div className="post" style={{ display: displayPost ? "flex" : 'none' }}>
      <h1>{post.title}</h1>
      <h2 style={{ display: displayText ? "flex" : 'none' }}>{post.text}</h2>
      <img src={post.image} alt="not loading" width={post.width} height={post.height} onLoad={() => setDisplayPost(true)} onError={() => setDisplayPost(false)} />
      <Footer post={post} />

   </div>;
}