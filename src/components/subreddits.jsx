import { Subreddit } from "./subreddit";
import { useSelector } from "react-redux";
import { selectSubreddits } from "../features/subredditsSlice";
export const Subreddits = () => {
   const subreddits = useSelector(selectSubreddits);
   console.log(subreddits);
   return (
      <div>
         {subreddits.map(subreddit => (
            <Subreddit key = {subreddit} title = {subreddit}/>
         ))}
      </div>
   );       
} 