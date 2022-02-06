import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';

function SendPropsToFunction(props) {
    console.log("props", props);
    // {{ display: !props.q && "none" }} ความหมาย ถ้าไม่มี q ให้ใช้ none
    return (
        <div>
            <h2>{props.product.name}</h2>
            <p>{props.product.string}</p>
        </div>
    );
}

export default SendPropsToFunction;
