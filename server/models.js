import db from './db';


module.exports = {
  posts: {
    get(callback) {
      db.any('SELECT post_number,title,array_to_json(tags),body,written,created,edited FROM posts')
        .then(data => {
          callback(data);
        })
        .catch(error => {
          console.log('ERROR from `models.posts.get` method', error);
          callback(error);
        });
    },
  },

  post: {
    get(param, callback) {
      db.any('SELECT post_number,title,array_to_json(tags),body,written,created,edited FROM posts WHERE post_number=$1', param)
        .then(data => {
          callback(data);
        })
        .catch(error => {
          console.log('ERROR from `models.posts.get` method', error);
          callback(error);
        });
    },

    post(param, callback) {
      db.any('INSERT INTO posts(title,tags,body,written)VALUES($1,$2,$3,$4)', param)
        .then(data => {
          callback(data);
        })
        .catch(error => {
          console.log('ERROR from `models.posts.post` method', error);
          callback(error);
        });
    },

    put(param, callback) {
      db.any('UPDATE posts SET body=? WHERE post_number=$1', param)
        .then(data => {
          callback(data);
        })
        .catch(error => {
          console.log('ERROR from `models.posts.put` method', error);
          callback(error);
        });
    },

    delete(param, callback) {
      db.any('DELETE FROM posts WHERE post_number=$1', param)
        .then(data => {
          callback(data);
        })
        .catch(error => {
          console.log('ERROR from `models.posts.delete` method', error);
          callback(error);
        });
    },
  },
};
