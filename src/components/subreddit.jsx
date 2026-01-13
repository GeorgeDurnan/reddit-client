import { setSubreddit } from "../features/subredditsSlice";
import { useDispatch } from "react-redux";
export const Subreddit = (props) => {
    const dispatch = useDispatch()
    const handleClick = () => dispatch(setSubreddit(props.title));
   return <>
    <div id = "subreddit">
        <button onClick = {handleClick}>
        <h4>{props.title}</h4>
        <img src= {"/icons/" + props.title + ".png"} alt = "not loading" width="50" height="50"/>
        </button>
    </div>
   
   </>;
}