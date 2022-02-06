import React from 'react';

export default function UseMemoDemo1() {
    const [value, setValue] = React.useState(0);
    return (
        <div>
            <CheckValueBeforeButton b={value}/>
            <button onClick={() => setValue(prev => prev + 1)}>
                Increase
            </button>
            <button onClick={() => setValue(0)}>Reset</button>
            <Display a={1} b={value} />
        </div>
    )
}
const CheckValueBeforeButton = ({ b }) => {
    return (
        <div>
            <h2>{b}</h2>
        </div>
    )
}
const Display = ({ a, b }) => {
    const memo = React.useMemo(() => {
        return Math.random();
        //useful for in memo dont need to call every time when Display trig
    }, [a]); //when variable {a} change then process


    const random = Math.random();

    return (
        <div>
            <h1>
                A/B : {a}/{b}
            </h1>
            <h1>Random:{random}</h1>
            <h1>MemoRandom:{memo}</h1>
        </div>
    )
}
