const Post = require('../models/post')

module.exports = (app) => {

    // let posts = [
    //     { name: 'Bob', charityName: 'Bobbers', amountGiven: 69.69 }
    // ]

    //HOME
    app.get('/', (req, res) => {
        res.render('home');
    });

    //INDEX
    app.get('/posts', (req, res) => {
        Post.findById()
            .then((posts) => {
                res.render('posts-index', { posts: posts });
            }).catch((err) => {
                console.log('Error', err)
            });
    });

    //NEW
    app.get('/posts/new', (req, res) => {
        res.render('posts-new');
    });

    //CREATE
    //READ
    
    //UPDATE
    //DELETE
    
}