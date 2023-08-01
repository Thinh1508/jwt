const express = require("express")
const jwt = require("jsonwebtoken")
const app = express()
require("dotenv").config()

const PORT = 1011
// database
const users = [
  {
    id: 1,
    username: "thinh",
  },
  {
    id: 2,
    username: "thien",
  },
]

// app
app.use(express.json())

app.post("/login", (req, res) => {
  const username = req.body.username
  const user = users.find((user) => user.username === username)

  if (!user) {
    return res.sendStatus(401)
  }

  //   create jwt
  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN, {
    expiresIn: "30s",
  })
  res.json({ accessToken })
})

app.listen(PORT, () => {
  console.log(`Server started in port: ${PORT}`)
})
