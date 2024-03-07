const express = require('express')
const app = express()
const PORT = 4000

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'NODE API VERCEL'
    })
})

app.get('/api/items', (req, res) => {
    res.status(200).json([
        { id: 1, name: 'item 1'},
        { id: 2, name: 'item 2'},
        { id: 3, name: 'item 3'},
    ])
})

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})

module.exports = app