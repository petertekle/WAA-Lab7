import React, { useState, useEffect } from "react";
import axios from "axios";
import { Posts } from "./Posts";
import { AddPost } from "./AddPost";
import { PostDetails } from "./PostDetails";

export const Dashboard = () => {
  const customStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "2rem",
  };

  const customStyleHeader = {
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    fontSize: "2.5rem",
    color: "#333",
    marginBottom: "2rem",
  };

  const [postInfo, setPostInfo] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [selectedPostId, setSelectedPostId] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get("http:localhost:8080/api/v1/posts");
      setPostInfo(response.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const changeNameHandler = () => {
    const updatedPostInfo = [...postInfo];
    updatedPostInfo[0].title = inputValue;
    setPostInfo(updatedPostInfo);
  };

  const handlePostDeleted = () => {
    fetchPosts();
    setSelectedPostId(null);
  };

  return (
    <div style={customStyle}>
      <h1 style={customStyleHeader}>Dashboard</h1>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {postInfo.map((p) => (
          <div key={p.id} onClick={() => setSelectedPostId(p.id)} style={{ cursor: "pointer" }}>
            <Posts id={p.id} title={p.title} author={p.author} />
          </div>
        ))}
      </div>
      {selectedPostId && (
        <PostDetails postId={selectedPostId} onPostDeleted={handlePostDeleted} />
      )}
      <AddPost fetchPosts={fetchPosts} />
      <div style={{ marginTop: "2rem" }}>
        <input
          value={inputValue}
          onChange={handleChange}
          style={{ padding: "0.5rem", marginRight: "1rem", fontSize: "1rem" }}
          type="text"
        />
        <button
          onClick={changeNameHandler}
          style={{
            padding: "0.5rem 1rem",
            fontSize: "1rem",
            backgroundColor: "#007BFF",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Change Name
        </button>
      </div>
    </div>
  );
};
