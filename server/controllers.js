import models from './models';


module.exports = {
  posts: {
    get(req, res) {
      models.posts.get((data, error) => {
        if (error) {
          res.status(500).end();
        } else {
          res.status(200).json(data);
        }
      });
    },
  },

  post: {
    get(req, res) {
      models.post.get([req.params.id], (data, error) => {
        if (error) {
          res.status(500).end();
        } else {
          res.status(200).json(data[0]);
        }
      });
    },
  },
};
