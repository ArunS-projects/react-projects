import React from 'react';

function ClipboardEvents(props) {

    const handleCopiedData = (e) => {
        console.log('Copied');
        e.target.style.background = 'pink';
        e.target.style.color = 'green';
    }

    const handleCutData = (e) => {
        console.log('Cut');
        e.target.style.background = 'red';
        e.target.style.color = 'black';
    }
    const handlePastedData = (e) => {
        console.log('Pasted');
        e.target.style.background = 'black';
        e.target.style.color = 'yellow';
    }
    const handleSelection =(e)=>{
        const element = document.querySelector('textarea');
        element.setAttribute('class', 'select');
    }

    return (
        <div>
            <h3>Let's now learn about clipboard events.<br/>These are tiggered when actions like cut, copy, paste are performed.<br/>Types are:</h3>
            <ol type='1'>
                <li>onCut</li>
                <li>onCopy</li>
                <li>onPaste</li>
            </ol>
            <textarea name = 'userInput' onSelect={handleSelection} onCut={handleCutData} onCopy={handleCopiedData} onPaste={handlePastedData}></textarea>
        </div>
    );
}

export default ClipboardEvents;