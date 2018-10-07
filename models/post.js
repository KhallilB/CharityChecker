const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = {
    
    name: String,
    charityName: String,
    amountGiven: Number
}

module.exports =mongoose.model('Post', postSchema)