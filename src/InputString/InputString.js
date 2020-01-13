import React from 'react';
import './InputString.css'

const input = (props) => {
    return (
        <div className="inputString">
            <h1>Create a new String</h1>
            <input type='text' > </input>
            <button onClick={props.toggleString}>Show String</button>

        </div>
    )

};

export default input;