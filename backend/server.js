const express = require("express")
const cors = require("cors")

const app = express()
app.use(cors())
const port = 3000
app.get("/getSubreddit/:subreddit", async (req, res) => {

    const response = await fetch(`https://www.reddit.com/r/${req.params.subreddit}/.json`)
    const data = await response.json();
    if (response.status === 200) {
        res.status(200).send(data)
    } else {
        res.status(response.status).send()
    }


})
app.get("/getComments/", async (req, res) => {
    
    const response = await fetch(`${req.query.link}/.json`)
    const data = await response.json();
    if (response.status === 200) {
        res.status(200).send(data)
    } else {
        res.status(response.status).send()
    }


})
app.get("/getAbout/:subreddit", async (req, res) => {

    const response = await fetch(`https://www.reddit.com/r/${req.params.subreddit}/about/.json`)
    const data = await response.json();
    if (response.status === 200) {
        res.status(200).send(data)
    } else {
        res.status(response.status).send()
    }


})
app.listen(port, () => {
    console.log(`This is ${port}`)
})