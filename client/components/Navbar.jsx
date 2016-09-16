import React from 'react';
import { Link } from 'react-router';
import PostsList from './../components/PostsList';


export default function Navbar({ posts }) {
  return (
    <nav
      className="navbar navbar-fixed-top"
      role="navigation"
    >

      <div className="navbar-header">
        <Link to="/" className="navbar-brand">
          松田 弘
        </Link>
        <button
          type="button" className="navbar-toggler collapsed pull-xs-right"
          data-toggle="collapse" data-target="#navbarTitles"
          aria-controls="navbarTitles" aria-expanded="false"
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
