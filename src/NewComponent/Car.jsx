// import React from "react";
// import { Color } from "./Color";

// export const Car = (props) => {

//     const customStyle = {
//         border: "0.2vw solid black",
//         width: "15vw",
//         textAlign: "Center",
//         marginLeft: "1vw",
//         backgroundColor: "yellow",
//         color: "black",
//         fontFamily: "fantasy",
//         fontSize: "1vw",
//         borderRadius: "2vw"
//     }

//     const customStyleImg = {
//         width: "5vw",
//         height:"5vw"
//     }

//     return (
//         <div style={customStyle}>
//             <p>{props.name}</p>
//             <img style={customStyleImg} src={props.img} alt="Here is a car"/>
//             <p>{props.img}</p>
//             <p>{props.model}</p>
//             <p>{props.brand}</p>
//             <p>{props.price}</p>
//             <p>{props.year}</p>

//             </div>
//     );
// }

import React from "react";

export const Car = ({ name, img, model, brand, price, year }) => {
    const styleCustomImg = {
        width: "10vw",
        height: "10vw"
    };

    return (
        <div style={{ margin: "1vw", textAlign: "center", border: "1px solid black", padding: "1vw" }}>
            <h2>{name}</h2>
            <img src={img} alt={model} style={styleCustomImg} />
            <p>Model: {model}</p>
            <p>Brand: {brand}</p>
            <p>Price: {price}</p>
            <p>Year: {year}</p>
        </div>
    );
};
