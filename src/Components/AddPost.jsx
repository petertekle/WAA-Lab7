import React, { useState } from "react";
import axios from "axios";

export const AddPost = ({ fetchPosts }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  const addPostHandler = async () => {
    try {
      await axios.post("http://localhost:8080/api/v1/posts", {
        title,
        author,
        content,
      });
      fetchPosts();
      setTitle("");
      setAuthor("");
      setContent("");
    } catch (error) {
      console.error("Error adding post:", error);
    }
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "2rem 0",
    padding: "1rem",
    border: "1px solid #ccc",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
  };

  const inputStyle = {
    margin: "0.5rem 0",
    padding: "0.5rem",
    width: "80%",
    fontSize: "1rem",
  };

  const buttonStyle = {
    padding: "0.5rem 1rem",
    fontSize: "1rem",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  };

  return (
    <div style={formStyle}>
      <h2>Add Post</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={inputStyle}
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        style={inputStyle}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        style={{ ...inputStyle, height: "100px" }}
      />
      <button onClick={addPostHandler} style={buttonStyle}>
        Add Post
      </button>
    </div>
  );
};
