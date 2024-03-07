const express = require('express')
const itemRouter = require('./app/routes/itemRoute');

const app = express()

app.use(express.json())

app.use('/api/v1/items', itemRouter)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})

module.exports = app