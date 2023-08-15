const express = require('express')
const app = express()
const mongoose = require('mongoose')
const mongodb = require('mongodb')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const morgan = require('morgan')
const Cat = require('./model/Cat')
const port = process.env.PORT || 5000
const fs = require('fs')
const catRouter = require('./routes/catRoutes')
require('dotenv').config()


const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

//middleware
app.use(cookieParser())
app.use(express.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(cors())
app.use(express.json({extended: true}))
app.use(catRouter)


const connectDatabase = async () => {
    try {
        const conn = await mongoose.connect(process.env.DATABASE, options)
        console.log('Connected to the database')
    } catch (error) {
        console.log(error)
    }
}

const data = JSON.parse(fs.readFileSync('./data.json'))




connectDatabase().then(() => {
    app.listen(port, () => {
        console.log(`Server is running at port ${port}`)
    })
})