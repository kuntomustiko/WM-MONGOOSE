
// Configuration Express
const express = require('express')
const app = express()
const port = 2020

// Configuration Mongoose
const mongoose = require('mongoose')
// mongoose-test = nama database nya
mongoose.connect('mongodb://127.0.0.1:27017/mongoose-test', {
    useNewUrlParser: true, useUnifiedTopology: true
})

app.use(express.json())

// Import Models
const User = require('./src/models/userModel')

// route
// Home
app.get('/', (req, res) => {
    res.send(
        '<h1> API is running </h1>'
    )
})

// Async Await

// Read All User
app.get('/users', async (req, res) => {

    try {
        // tungguin pake await lalu di simpan di resp lalu di kirimkan ke res
        let resp = await User.find({})
        res.send(resp)
    } catch (err) {
        res.send(err)
    }
    // User.find({})
    //     .then(resp => res.send(resp)).catch(err => res.send(err))
})

app.post('/users', async (req, res) => {
    // const user = new User({ username: 'rochafi', name: 'Rochafi', age: 22 })
    const user = new User(req.body)

    try {
        let resp = await user.save()
        res.send(resp)
    } catch (err) {
        res.send(err)
    }
    // user.save()
    // .then((resp) => { res.send(resp) }).catch(err => res.send(err))
})

app.listen(port, () => {
    console.log('sucess running');
})