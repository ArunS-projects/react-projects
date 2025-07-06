import React from 'react';

function ClassNameAttribute(props) {
    return (
        <>
        <h1>What is className attribute in JSX?</h1>
        <h2 className = 'desc'>Similar to class attribute in HTML, we have className attribute in JSX.</h2>
        <h2 className = 'desc'>Since JSX is rendered as JavaScript, and JS already has 'class' keyword reserved, JSX introduced className as a workaround.</h2>
        </>
    );
}

export default ClassNameAttribute;