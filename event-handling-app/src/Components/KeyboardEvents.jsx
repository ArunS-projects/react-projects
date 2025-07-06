import React from 'react';

const handleKeyDown = (event) =>{
    console.log(`key pressed is: ${event.target.value}`);
}

const handleKeyUp = (e) => {
    console.log(`key released`);
}

function KeyboardEvents(props) {
    return (
        <div>
            <h3>Let's learn about keyboard events<br/>Types of keyboard events supported are:</h3>
            <ol type='1'>
                <li>keyUp</li>
                <li>keyDown</li>
                <li>keyPressed(<b><code className='code'>note</code></b> that this is deprecated)</li>
            </ol>
            <>
                <input placeholder="Enter some text here" className='input' type='textarea' onKeyUp={handleKeyUp} onKeyDown={handleKeyDown}></input>
            </>
        </div>
    );
}

export default KeyboardEvents;