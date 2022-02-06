import React, { Component, useState } from 'react';

export default function UseEffectDemo2() {
    const [count2, setCount2] = useState(0);

    React.useEffect(()=> {
        document.title = count2;
    }, []);
    //[] call only one time
    return (
        <div class="row">
            <div class="row">
                <form>
                    <h4> useEffect {count2}</h4>
                    <button onClick={(e) => {
                        e.preventDefault();
                        setCount2(count2 + 1)
                    }}>Add</button>

                </form>
            </div>            
        </div>

    )
}