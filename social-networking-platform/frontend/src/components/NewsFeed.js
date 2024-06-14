import React, { useState, useEffect } from 'react';

const NewsFeed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts from backend API
    const fetchPosts = async () => {
      try {
        const response = await fetch('backend/api/posts');
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        const data = await response.json();
        setPosts(data.posts);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPosts();
  }, []);

  const handleLikePost = (postId) => {
    // Logic to like a post
  };

  const handleCommentPost = (postId, comment) => {
    // Logic to comment on a post
  };

  const handleSharePost = (postId) => {
    // Logic to share a post
  };

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <button onClick={() => handleLikePost(post.id)}>Like</button>
          <input type="text" placeholder="Add a comment" />
          <button onClick={() => handleCommentPost(post.id, 'comment')}>Comment</button>
          <button onClick={() => handleSharePost(post.id)}>Share</button>
        </div>
      ))}
    </div>
  );
};

export default NewsFeed;