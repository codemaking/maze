require('noodle')
const express = require('express')

const app = express()
const port = process.env.PORT || 3001


app.get('/', (req, res) => {
  console.log("Sending the mazes")
  res.send("Mazes")
})

app.listen(port, () => console.log(`Listening on port ${port}`))
