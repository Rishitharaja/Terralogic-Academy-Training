import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Post {
  id: number;
  title: string;
  body: string;
}

function PostList() {
  const [posts, setPosts] = useState<Post[]>([]);

  // Fetch posts (GET)
  useEffect(() => {
    axios
      .get<Post[]>('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => console.error('Error fetching posts:', error));
  }, []);

  // Create a new post (POST)
  useEffect(() => {
    const newPost = {
      title: "hf",
      body: "This is a test post",
      userId: 1
    };

    axios
      .post<Post>('https://jsonplaceholder.typicode.com/posts', newPost)
      .then(response => {
        // Optionally add the new post to the state
        setPosts(prevPosts => [response.data, ...prevPosts]);
      })
      .catch(error => console.error('Error creating post:', error));
  }, []);

  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>
          <strong>{post.title}</strong>: {post.body}
        </li>
      ))}
    </ul>
  );
}

export default PostList;
