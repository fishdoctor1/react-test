import React from 'react';

export default function UseCallbackDemo1() {
    const [value, setValue] = React.useState(0);
    // const [value2, setValue2] = React.useState(0);
    return (
        <div>
            <CheckValueBeforeButton b={value} />
            <button onClick={() => setValue(prev => prev + 1)}>
                Increase
            </button>
            <button onClick={() => setValue(0)}>Reset</button>
            <Display id={value} />
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
const Display = ({ id }) => {
    const handleClick = React.useCallback(() => {
        console.log("Click");    
        //useful for in memo dont need to call every time when Display trig
    }, [id]); //when variable {id} change then process    

    return (
        <div>
            <h1>
                UseCallback Demo {id}
            </h1>
            <button onClick={handleClick}>
                Test
            </button>
        </div>
    )
}
