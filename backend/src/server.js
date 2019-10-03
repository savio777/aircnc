const express = require('express')

const mongoose = require('mongoose')

const app = express()

const routes = require('./routes')

const port = 7777

mongoose.connect('mongodb://localhost:27017/omnistack9',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)

app.use(express.json())

app.use(routes)

app.listen(port, () => {
    console.log(`server is running in localhost:${port}`)
})
