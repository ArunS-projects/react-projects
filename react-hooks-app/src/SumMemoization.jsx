import React, { useState,useMemo } from 'react';

function SumMemoization(props) {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);

    const expensiveSumCalculation = (num1, num2) =>{
        console.log(`num1 = ${num1}\nnum2 = ${num2}`);
        return num1+num2;
    }

    const memoizedSum = useMemo(()=>expensiveSumCalculation(num1,num2),[num1,num2])
    return (
        <div>
            <p>Sum of {num1} and {num2} is {memoizedSum} </p>
            <button onClick={()=>setNum1(num1+2)}className='button'>Increment Num1</button>
            <button onClick={()=>setNum2(num2+3)} className='button'>Increment Num2</button>
        </div>
    );
}

export default SumMemoization;