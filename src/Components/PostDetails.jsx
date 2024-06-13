import React, { useState, useEffect } from "react";
import axios from "axios";

export const PostDetails = ({ postId, onPostDeleted }) => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetchPostDetails();
  }, [postId]);

  const fetchPostDetails = async () => {
    try {
      const response = await axios.get(`http:localhost:8080/api/v1/posts/${postId}`);
      setPost(response.data);
    } catch (error) {
      console.error("Error fetching post details:", error);
    }
  };

  const deletePostHandler = async () => {
    try {
      await axios.delete(`http:localhost:8080/api/v1/posts/${postId}`);
      onPostDeleted();
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  if (!post) return <div>Loading...</div>;

  const postStyle = {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "1rem",
    margin: "1rem 0",
    width: "60%",
    backgroundColor: "#f9f9f9",
  };

  const buttonStyle = {
    padding: "0.5rem 1rem",
    fontSize: "1rem",
    backgroundColor: "#dc3545",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  };

  return (
    <div style={postStyle}>
      <h2>{post.title}</h2>
      <p>Author: {post.author}</p>
      <p>{post.content}</p>
      <button onClick={deletePostHandler} style={buttonStyle}>
        Delete
      </button>
    </div>
  );
};
