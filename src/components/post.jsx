import React from "react";
export const Post = (props) => {
  
   return <>
   <h1>{props.post.title}</h1>
   <h2>{props.post.text}</h2>
   <img src= {props.post.image} alt = "not loading" width="800" height="600"/> 
   <h3>{props.post.author}</h3>
   
   </>;
}