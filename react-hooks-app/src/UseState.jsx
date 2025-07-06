import React, { useState } from 'react';

function UseState(props) {

    const [five, setFive] = useState(0);

    const handleClick = () =>{
        console.log(`Button is clicked!`);
        setFive(five+5);
        console.log('Value updated');
    }
    return (
        <div>
            <p>Using useState hook to increment the value of a state with 5. Initial state is 0.<br/>
                Value of variable will change when below button is clicked. <br/>
                Click below and see the value changing: {five}
            </p>
            <button onClick={handleClick}>Click to update value</button>
        </div>
    );
}

export default UseState;