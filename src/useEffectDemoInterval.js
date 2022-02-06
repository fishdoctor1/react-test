import React, { Component, useState } from 'react';

export default function UseEffectDemoInterval() {
    const [count, setCount] = useState(0);
    const doSomeThing = () => {
        setCount(countPrev => countPrev + 1);
        console.log("do something");

    }
    React.useEffect(() => {
        //document.title = count3;
        const intervalId = setInterval(doSomeThing, 1000);
        return () => {
            //benefit can use when component destroyed
            console.log("destroyed");
            clearInterval(intervalId)
        }
    }, []);
    return (
        <div class="row">
            <div class="row">
                <form>
                    <h4> {count} </h4>
                </form>
            </div>
        </div>

    )
}