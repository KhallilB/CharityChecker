const Comment = require('../models/comment');

module.exports = (app) => {

    //CREATE: COMMENT
    app.post('/posts/comments', (req, res) => {
        Comment.create(req.body)
            .then((comment) => {
                console.log(req.body)
                res.redirect(`/posts/${comment.postId}`);
            }).catch((err) => {
                console.log('Error', err)
            });
    });

}