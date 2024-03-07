const express = require('express')
const app = express()
const PORT = 4000

app.get('/', (req, res) => {
    res.send('NODE API  VERCEL')
})

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})

module.exports = app