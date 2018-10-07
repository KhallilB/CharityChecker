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
        Post.find()
            .then((posts) => {
                res.render('posts-index', { posts: posts });
            }).catch((err) => {
                console.log('Error', err)
            });
    });

    //NEW
    app.get('/posts/new', (req, res) => {
        res.render('posts-new', {} );
    });

    //CREATE
    app.post('/posts', (req, res) => {
        console.log(req.body)
        Post.create(req.body)
            .then((post) => {
                res.redirect(`/posts/${post._id}`)
            }).catch((err) => {
                console.log('Error', err);
            });
    });

    //SHOW
    app.get('/posts/:id', (req, res) => {
        Post.findById(req.params.id)
            .then((post) => {
                res.render('posts-show', { post: post});
            }).catch((err) => {
                console.log('Error', err)
            });
    });
    //READ
    
    //UPDATE
    //DELETE
    
}