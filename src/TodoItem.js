import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';

function TodoItem(props) {
    console.log("TodoItem props", props);
    // {{ display: !props.q && "none" }} ความหมาย ถ้าไม่มี q ให้ใช้ none
    const completeStyle = {
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
    }
    return (
        <div>
            <h3>TodoItem {props.countChild}</h3>
            <input type="checkbox" checked={props.item.completed}
                onChange={() => props.handleChange(props.item.id)
                } />
            <p style={props.item.completed ? completeStyle : null}>{props.item.text}</p>
            <br />
            <button onClick={() => props.handleClick()}>Click In!</button>
        </div>
    );
}

export default TodoItem;
