module.exports = (app) => {

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