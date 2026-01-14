import { Subreddit } from "./subreddit";
import { useSelector } from "react-redux";
import { selectSubreddits } from "../features/subredditsSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addSubreddit } from "../features/subredditsSlice";
export const Subreddits = () => {
   const subreddits = useSelector(selectSubreddits);
   const [input, setInput] = useState("");
   const [output, setOutput] = useState("")
   const dispatch = useDispatch()
   console.log(subreddits);
   function handleSubmit(e) {
      e.preventDefault();
      const reddit = input;
      setInput("")
      checkExists(reddit)

   }
   async function checkExists(reddit) {
      if (subreddits.includes(reddit)) {
         setOutput("Already included")
         return
      }
      const response = await fetch("http://localhost:3000/getAbout/" + reddit)
      const json = await response.json()
      if (response.status == 200) {
         setOutput("adding...")
         const icon = json.data.icon_img;
         if (icon) {
            dispatch(addSubreddit({ name: reddit, icon: json.data.icon_img }))
         } else {
            dispatch(addSubreddit({ name: reddit, icon: "https://e7.pngegg.com/pngimages/288/103/png-clipart-reddit-computer-icons-logo-others-miscellaneous-orange.png" }))
         }

      } else {
         setOutput("does not exist maybe you typed it wrong")
      }
   }
   return (
      <div>
         {subreddits.map(subreddit => (
            <Subreddit key={subreddit} title={subreddit} />
         ))}
         <form onSubmit={handleSubmit}>
            <input type="text" id="input" name="input" value={input} onChange={(e) => setInput(e.target.value)} /><br />
            <input type="submit" value="Add new subreddit"></input>
         </form>
         <h3>{output}</h3>
      </div>
   );
} 