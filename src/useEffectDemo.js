import React, { Component, useState } from 'react';

export default function UseEffectDemo() {
    const [count, setCount] = useState(0);

    React.useEffect(()=> {
        document.title = count;
    }, [count]);
    return (
        <div class="row">
            <div class="row">
                <form>
                    <h4> useEffect with DocTitle {count}</h4>
                    <button onClick={(e) => {
                        e.preventDefault();
                        setCount(count + 1)
                    }}>add</button>

                </form>
            </div>            
        </div>

    )
}