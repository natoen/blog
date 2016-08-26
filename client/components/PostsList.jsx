import React from 'react';
import { Link } from 'react-router';


export default function PostsList({ posts }) {
  return (
    <ul className="list-group">
      {posts.sort((a, b) => a.post_number - b.post_number).map(post =>
        <li
          className="list-group-item"
          style={{ font: '1.5rem News Cycle', padding: '0.5rem 1.25rem', border: 'none' }}
          key={post.post_number}
        >
          <Link to={`${post.post_number}`} style={{ color: '#000000' }}>
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

