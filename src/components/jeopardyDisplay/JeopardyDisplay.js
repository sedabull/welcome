import React from 'react';
import './JeopardyDisplay.css';

function JeopardyDisplay(props) {
    return (
        <div className="JeopardyDisplay">
            <h2>{props.value}</h2>
            <h1>{props.category}</h1>
            <p>{props.clue}</p>
        </div>
    );//end return JSX
}//end JeopardyDisplay

export default JeopardyDisplay;