import React from 'react';

function StateInFunctionalComponent(props) {

    var str = 'not supported.';

    function callFunction(){
        str = 'possible using the concept of hooks.';
    }
    return (
        <div>
            <h1>------State in Functional Components------</h1>
                <h3>State change in functional component is {str}</h3>
                {/* <button onClick = {() => this.updateAddress()}>Update Address</button> */}
                <button onClick = {()=>callFunction}>Generate String</button>
        </div>
    );
}

export default StateInFunctionalComponent;