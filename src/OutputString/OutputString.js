import React from 'react';
import './OutputString.css'

const output = (props) => {
    return (
        <div class="outputString">
            <p value={props.createString}></p>
            <label > {props.desc} </label>
            <input type='text' onChange={props.change}></input>

        </div>
    )

};

export default output;