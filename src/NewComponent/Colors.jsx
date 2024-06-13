import React, { useState } from "react";
import { Color } from "./Color";

export function Colors(){

    //Use State
    const [color, setColor] = useState("");
    let [count, setCount] = useState(0);

    function handleBlue(){
        setColor("Blue");
        setCount(++count);
    }

    function handleYellow(){
        setColor("Yellow");
        setCount(++count);
    }

    function handleRed(){
        setColor("Red");
        setCount(++count);
    }

    function handleOrange(){
        setColor("Orange");
        setCount(++count);
    }

    

    return (
        <div>
            <Color colorName={color} counter={count}/>
            <button onClick={handleBlue}>Blue</button>
            <button onClick={handleYellow}>Yellow</button>
            <button onClick={handleRed}>Red</button>
            <button onClick={handleOrange}>Orange</button>

        </div>
    )
}