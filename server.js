const express = require("express")
const jwt = require("jsonwebtoken")
const verifyToken = require("./middleware/auth.js")
const app = express()
require("dotenv").config()

const PORT = process.env.PORT
// database

const posts = [
  {
    userId: 1,
    post: "post thinh",
  },
  {
    userId: 2,
    post: "post thien",
  },
  {
    userId: 2,
    post: "post thien 2",
  },
]

// app
app.use(express.json())

app.get("/posts", verifyToken, (req, res) => {
  res.json(posts.filter((post) => post.userId === req.userId))
})

app.listen(PORT, () => {
  console.log(`Server started in port: ${PORT}`)
})
