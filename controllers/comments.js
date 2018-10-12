const Comment = require('../models/comment');

module.exports = (app) => {

    //CREATE: COMMENT
    app.post('/posts/comments', (req, res) => {
        Comment.create(req.body)
            .then((comment) => {
                console.log(req.body)
                res.redirect(`/posts/${comment.postId}`)
            }).catch((err) => {
                console.log('Error', err)
            });
    });

    // //EDIT: COMMENT
    // app.get('/posts/comments/:id/edit', (req, res) => {
    //     Comment.findById(req.params.id)
    //         .then((comment) => {
    //             res.render('comments-edit', { comment: comment })
    //         }).catch((err) => {
    //             console.log('Error', err)
    //         });
    // });

    // //UPDATE: COMMENT
    // app.put('/posts/comments/:id', (req, res) => {
    //     Comment.findByIdAndUpdate({ postId: req.params.id })
    //         .then((comment) => {
    //             console.log({ postId: req.params.id })
    //             res.redirect(`/posts/comments/${comment.postId}`)
    //         }).catch((err) => {
    //             console.log('Error', err)
    //         });
    // });
    
    //DELETE: COMMENT
    app.delete('/posts/comments/:id', (req, res) => {
        Comment.findByIdAndDelete(req.params.id)
            .then((comment) => {
                console.log('DELETED Comment')
                res.redirect(`/posts/${comment.postId}`)
            }).catch((err) => {
                console.log('Error', err)
            });
    });

}