const express = require('express')
const http = require('http')
const https = require('https')
const fs = require('fs')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')

const app = express()
const routes = require('./routes')

const portHttp = 5555
const portHttps = 7777

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

const privateKey = fs.readFileSync(__dirname + '/ssl/server.key', 'utf8')
const publicKey = fs.readFileSync(__dirname + '/ssl/server.crt', 'utf8')

const httpServer = http.createServer(app)
const httpsServer = https.createServer({ key: privateKey, cert: publicKey }, app)

httpServer.listen(portHttp, () => {
    console.log(`server is running in http://localhost:${portHttp}`)
})

httpsServer.listen(portHttps, () => {
    console.log(`server is running in https://localhost:${portHttps}`)
})
