const express = require('express')

const mongoose = require('mongoose')

const cors = require('cors')

const app = express()

const routes = require('./routes')

const port = 7777

mongoose.connect('mongodb://localhost:27017/omnistack9',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)

// com o cors é possível definir urls que vão poder acessar o servidor
//app.use(cors({ origin: 'http://localhost:3000' }))

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(port, () => {
    console.log(`server is running in localhost:${port}`)
})
