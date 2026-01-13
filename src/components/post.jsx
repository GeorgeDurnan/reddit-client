import { Comments } from "./comments";
export const Post = ({post}) => {

   return <>
      <h1>{post.title}</h1>
      <h2>{post.text}</h2>
      <img src={post.image} alt="not loading" width="800" height="600" />
      <h3>{post.author}</h3>
      <Comments postId = {post.id}/>

   </>;
}