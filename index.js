const express = require('express')
const app = express()
const port = 3010

app.get('/', (req, res) => {
    res.send('Hello Natasha and Gleb' +
        '!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})