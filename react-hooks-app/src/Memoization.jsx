import React, {useMemo, useState} from "react";


const Memoization = () => {
    const [count, setCount] = useState(0);

    const expensiveCalculation = (num) =>{
        console.log(`Calculating...`);
        return num*7;
    };

    const memoizedValue = useMemo(()=>expensiveCalculation(count), [count]);
    // console.log(`Memoized Value: ${memoizedValue}`);
    return (
        <div>
            Count Value: {count} <br/>
            Calculated Value: {memoizedValue} <br/>
            <button onClick={()=>setCount(count+1)}>Get Results</button>
        </div>
    );
};

export default Memoization;