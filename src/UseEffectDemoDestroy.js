import React, { Component, useState } from 'react';

export default function UseEffectDemoDestroy() {
    const [count3, setCount3] = useState(0);

    React.useEffect(()=> {
        //document.title = count3;

        return()=>{
            //benefit can use when component destroyed
            console.log("destroyed");
            
        }
    }, [count3]);
    return (
        <div class="row">
            <div class="row">
                <form>
                    <h4> useEffect3 {count3}</h4>
                    <button onClick={(e) => {
                        e.preventDefault();
                        setCount3(count3 + 1)
                    }}>Hide</button>

                </form>
            </div>            
        </div>

    )
}