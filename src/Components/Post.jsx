import React from "react";

export const Post = (props) => {
    let customStyle ={
        border: "1px solid silver",
        width:"10vw",
        textAlign:"center",
        backgroundColor:"blue",
        color: "white",
        opacity: "0.5"
    }

return (
    <div>
    <div style= {customStyle}>
        <p>id: {props.id}</p>
        <p>Title: {props.title}</p>
        <p>Author: {props.author}</p>
    </div>
    </div>
)
}