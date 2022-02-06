import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';

function renderWithCondition(props) {
    console.log("props", props);
    // {{ display: !props.q && "none" }} ความหมาย ถ้าไม่มี q ให้ใช้ none
    return (
        <div>
            {props.product.render && props.product.unreadMessage &&
              <h2>have {props.product.unreadMessage.length} unread</h2>}            
        </div>
    );
}

export default renderWithCondition;
