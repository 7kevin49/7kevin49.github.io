import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import blogpostsData from '../../data/blogposts.json';
import '../../styles/Blog.css';

function Blog() {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    setBlogPosts(blogpostsData);
  }, []);

  return (
    <div className="blog">
      <h1>Blog Posts</h1>
      <div className="blog-posts">
        {blogPosts.map(post => (
          <div key={post.id} className="blog-post-summary">
            <Link to={`/blog/${post.id}`}>
              <h2>{post.title}</h2>
              <p>{post.summary}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
