import { setSubreddit, removeSubreddit } from "../features/subredditsSlice";
import { useDispatch } from "react-redux";
import { selectIcon } from "../features/subredditsSlice";
import { useSelector } from "react-redux";
export const Subreddit = (props) => {
    const dispatch = useDispatch()
    const handleClick = () => dispatch(setSubreddit(props.title));
    const handleClick2 = () => dispatch(removeSubreddit(props.title));
    const icon = useSelector((state) => selectIcon(state, props.title))
   return <>
    <div id = "subreddit">
        <button onClick = {handleClick}>
        <h4>{props.title}</h4>
        <img src= {icon} alt = "not loading" width="50" height="50"/>
        </button>
        <button onClick = {handleClick2} style = {{display: props.title === "all" ? "none" : "block"}}>Delete</button>
    </div>
   
   </>;
}