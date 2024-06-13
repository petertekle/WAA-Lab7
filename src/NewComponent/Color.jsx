import React from "react";

export function Color(props) {

    return (
        <div style={{background: props.colorName}}>
            <h1>The color is { props.colorName }</h1>
            <h2>{props.counter}</h2>
        </div>
    )
}