export const Comment = ({comment})=>{
    return(
        <>
        <h3>{comment.author}</h3>
        <h4>{comment.text}</h4>
        <h5>Upvotes: {comment.upvotes - comment.downvotes}</h5>
        <h5>Replies: {comment.replies.length}</h5>
        </>
    )
}