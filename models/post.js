const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = {

    charityName: String,
    name: String,
    amountGiven: String,
    description: String
}

module.exports =mongoose.model('Post', postSchema)