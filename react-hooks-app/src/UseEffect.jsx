import React, {useState, useEffect} from 'react';
// import 

function UseEffect(props) {

    const [count, setCount] = useState(0);

    useEffect(()=>{
        console.log(`auto incrementing`);
        let timer = setTimeout(()=>{
            setCount(count+1)
        }, 1000)
        if(count === 10){
            setCount(0);
            clearTimeout(timer);
        }
        // return()=> clearTimeout(timer);
    }, [count])
    return (
        <div>
            <p>Let's implement useEffect react hook:<br/>
            Value of count: {count}
            </p>
        </div>
    );
}

export default UseEffect;