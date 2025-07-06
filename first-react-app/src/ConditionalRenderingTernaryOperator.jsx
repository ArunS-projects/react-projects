import React from 'react';

function ConditionalRenderingTernaryOperator(props) {

    const x = 'Ricky';
    
    return (
        <div>
            <h1>Ternary Operator in Conditional Rendering</h1>
            <h2>We will find out here if it's supported or not.</h2>
            <h2>{x === ''? 'Unauthorized access.' : ('Hello, ' + x + '!')}</h2>
        </div>
    );
}

export default ConditionalRenderingTernaryOperator;