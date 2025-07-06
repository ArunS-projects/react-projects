import React from 'react';

function ChildComponent(props) {
    return (
        <div>
            <b>ChildComponent</b>
            <p>Value of user in child component: {props.user}</p>
            {/* <ChildComponent1/> */}
            <ChildComponent1 user={props.user}/>
        </div>
    );
}

function ChildComponent1(props) {
    return (
        <div>
            <p>Value of user in child component 1: {props.user}</p>
            {/* <ChildComponent2/> */}
            <ChildComponent2 user={props.user}/>
        </div>
    );
}

function ChildComponent2(props) {
    return (
        <div>
            <p>Value of user in child component 2: {props.user}</p>
            {/* <ChildComponent3/> */}
            <ChildComponent3 user={props.user}/>
        </div>
    );
}

function ChildComponent3(props) {
    
    return (
        <div>
            <p>Value of user in child component 3: {props.user}</p>
        </div>
    );
}

export default ChildComponent;