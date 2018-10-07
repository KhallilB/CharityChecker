const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = {

    charityName: String,
    name: String,
    amountGiven: Number
}

module.exports =mongoose.model('Post', postSchema)