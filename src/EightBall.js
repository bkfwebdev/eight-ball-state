import React from 'react'
import { useState } from 'react'

export default function EightBall(props) {
    const [message,setMessage] = useState("Think of a question");
    const [bgColor,setbgColor] = useState("black");
    const handleClick = ()=> {
        console.log(props);
        
        let myRandomNum = Math.floor(Math.random() * 20);
        setMessage(props.props[myRandomNum].msg);
        setbgColor(props.props[myRandomNum].color);
    
    }

    return (
        <div>
        <div className = "eight-ball"
        style = {{backgroundColor : bgColor}}>
            <p>{message}</p>
        </div>
        <button onClick = {handleClick}>click me</button>
        </div>
       
    )
}
 