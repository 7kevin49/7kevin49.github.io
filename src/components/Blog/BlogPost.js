import React from 'react';
import { useParams } from 'react-router-dom';
import blogpostsData from '../../data/blogposts.json';
import '../../styles/BlogPost.css';

function BlogPost() {
  let { postId } = useParams();
  const post = blogpostsData.find(post => post.id.toString() === postId);

  if (!post) {
    return <div>Post not found!</div>;
  }

  return (
    <div className="blog-post">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}

export default BlogPost;
