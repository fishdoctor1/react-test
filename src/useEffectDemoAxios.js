import React, { Component, useState } from 'react';
import axios from "axios";
// import './MyCss.css';

export default function UseEffectDemoAxios() {
    const [dataArray, setDataArray] = useState([]);
    React.useEffect(() => {
        //document.title = count3;
        axios.get("https://jsonplaceholder.typicode.com/posts").then(result => {
            const { data } = result;
            console.log(data);
            setDataArray(data);

        })
    }, []);

    const completeStyle = {
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
    }
    return (
        <div class="row">
            {/* <ul>{dataArray && dataArray.map(item => <li key={item.id}>{item.id}. {item.title}</li>)}</ul> */}
            <table>
                <tbody>
                    <tr>
                        <th>ID</th>
                        <th>TITLE</th>
                        <th>PRICE</th>
                    </tr>
                    {dataArray.map((listValue, index) => {
                        return (
                            <tr key={index}>
                                <td>{listValue.id}</td>
                                <td>{listValue.title}</td>
                                <td>{listValue.price}</td>
                            </tr>
                        );
                    })}
                </tbody>

            </table>
        </div>

    )
}