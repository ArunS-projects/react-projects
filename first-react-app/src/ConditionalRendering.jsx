import React from 'react';

function ConditionalRendering(props) {

    const age = 25;
    if(age>=18){
        var str = 'eligible to vote';
    }else{
        str = 'not allowed to vote';
    }
    return (
        <div>
            Conditional Rendering is supported by JSX but not inside JSX.
            <br></br>
            if() statements can be written outside of JSX code(meaning outside return). Or one could use ternary operator(?:)
            <br />
            User's age is {age} and is {str}
        </div>
    );
}

export default ConditionalRendering;