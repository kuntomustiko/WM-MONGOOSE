const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    // username dengan type data string
    username: {
        type: String
    },
    name: {
        type: String
    },
    age: {
        type: Number
    }
})

// user menjadi nama collection
const User = mongoose.model('User', userSchema)

module.exports = User