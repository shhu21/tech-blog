const router = require('express').Router();
const { Post, User, Comment } = require("../../models");

router.get('/', (req, res) => {
    Post.findAll({
      //columns to query
      attributes: [
        'id',
        'comment_text',
        'user_id',
        'post_id'
      ],
      //order by recent created
      order: [['created_at', 'DESC']],
      //connect to the user model/ include is a JOIN
      include: [
        {
          model: User,
          attributes: ['username']
        }
      ]
    })
    //return database in json
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
    console.log(err);
    res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
    Comment.create({
        comment_text: req.body.comment_text,
        user_id: req.body.user_id,
        post_id: req.body.post_id
    })
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    });
});

router.delete('/:id', (req, res) => {
    Post.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
        res.json(dbPostData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

module.exports = router;