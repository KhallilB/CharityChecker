const Post = require('../models/post')

module.exports = (app) => {

    let posts = [
        { name: 'Bob', charityName: 'Bobbers', amountGiven: 69.69 }
    ]

    //HOME
    app.get('/', (req, res) => {
        res.render('home');
    })

    //INDEX
    app.get('/posts', (req, res) => {
        res.render('posts-index', { posts: posts });
    })

    //CREATE
    //READ
    
    //UPDATE
    //DELETE
    
}