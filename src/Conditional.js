import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';

function Conditional(props) {
    // {{ display: !props.q && "none" }} ความหมาย ถ้าไม่มี q ให้ใช้ none
    if(props.isLoading){
        return(
            <h1>Loading...</h1>
        )
    } else {
        return(
            <h1>temp</h1>
        )
    }
    // return (
    //     <div>
    //         <h1>Temp</h1>
    //     </div>
    // );
}

export default Conditional;
