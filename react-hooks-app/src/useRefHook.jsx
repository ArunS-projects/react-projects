import React from 'react';
import { useState, useRef, useEffect } from 'react';

function useRefHook(props) {

    const [val,updateVal] = useState("");
    const count = useRef(0);
    const preVal = useRef("")

    useEffect(()=>{
        count.current = count.current+1;
        console.log(`value of val in event handler function: ${val}`);
        preVal.current = val;
    }, [val]
    )

    return (
        <div>
            <p> 
                Render count, meaning how many times the UI is rendered, is {count.current}.<br/>
                Value of variable val is {val}<br/>
                Previous value of val using .current:{preVal.current} <br/>
                {/* Previous value of val: {preVal} */}
            </p>
            <input type='text' value={val} onChange={(e)=>updateVal(e.target.value)}>
            </input>
        </div>
    );
}

export default useRefHook;