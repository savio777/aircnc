const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')

const app = express()
const routes = require('./routes')

const port = 7777

mongoose.connect('mongodb://localhost:27017/omnistack9',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)

app.use(cors())
app.use(express.json())
app.use('/files', express.static(path.resolve(__dirname, '..', './assets/uploads')))
app.use(routes)

app.listen(port, () => {
    console.log(`server is running in localhost:${port}`)
})
