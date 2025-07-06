import React from 'react';

function InlineStyling(props) {

    const pTag = {
        backgroundColor: 'maroon',
        color: 'yellow'
    }
    const imgTag = {
        height: '600px',
        width: '1200px'
    }
    return (
        <div>
            <p style = {pTag}>This is inline styling. In inline styling, the styles are defined within the component as JavaScript objects <br />and passed in the tag</p>
            <img style = {imgTag} src = 'https://i.ytimg.com/vi/ejxBMzQczbw/maxresdefault.jpg' alt='sample internal styling definition'></img>
        </div>
    );
}

export default InlineStyling;