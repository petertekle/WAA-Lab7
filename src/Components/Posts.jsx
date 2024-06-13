import React from "react";
import { Post } from "./Post";

export const Posts = (props) => {
  let customStyleContainer = {
    display: "flex",
    justifyContent: "center",
    marginBottom: "1rem",
  };
  return (
    <div style={customStyleContainer}>
      <Post id={props.id} title={props.title} author={props.author} />
    </div>
  );
};
