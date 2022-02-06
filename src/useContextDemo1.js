import React from 'react';
import UseContextChild1 from "./useContextChild";
import ThemeContext from "./ThemeContext";

export default function UseContextDemo1(){
    return(
        <div>
            <ThemeContext.Provider value="red">
                <UseContextChild1 />
            </ThemeContext.Provider>
        </div>
    )
}