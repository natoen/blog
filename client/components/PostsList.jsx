import React from 'react';
import { Link } from 'react-router';


export default function PostsList({ posts }) {
  return (
    <ul className="list-group">
      {posts.sort((a, b) => b.post_number - a.post_number).map(post =>
        <li className="list-group-item" key={post.post_number}>
          <Link
            to={`${post.post_number}`}
            onClick={() => { $('.navbar-toggler').click(); }}
          >
            {post.title}
          </Link>
        </li>
      )}
    </ul>
  );
}

PostsList.propTypes = {
  posts: React.PropTypes.array,
};

