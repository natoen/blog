import React from 'react';
import { Link } from 'react-router';
import PostsList from './../components/PostsList';


export default function Navbar({ posts }) {
  return (
    <nav
      className="navbar navbar-fixed-top"
      style={{
        backgroundColor: '#FFF',
        borderTop: '8px solid #162242',
        borderBottom: '1px solid #E8E8E8',
      }}
      role="navigation"
    >

      <div className="navbar-header">
        <Link to="/" className="navbar-brand" style={{ fontWeight: 100, color: '#0F0F0F' }}>
          松田 弘
        </Link>
        <button
          type="button" className="navbar-toggler collapsed pull-xs-right"
          data-toggle="collapse" data-target="#navbarTitles"
          aria-controls="navbarTitles" aria-expanded="false"
          style={{ zIndex: 1 }}
        >
          <span id="notburger">Posts</span><span id="burger">&#9776;</span>
        </button>
      </div>
      <div id="navbarTitles" className="navbar-collapse collapse">
        <ul className="nav navbar-nav">
          {posts.length ? <PostsList posts={posts} /> : <div>Loading. . . </div>}
        </ul>
      </div>

    </nav>
  );
}

Navbar.propTypes = {
  posts: React.PropTypes.array,
};
