import React, { useContext } from 'react';
import {UserContext} from './UseContextAPI';

export function UseContextAPIchild() {
    const user = useContext(UserContext);
    return (
        <>
            <p>Value of user in UseContextAPIchild component is: {user}</p>
            <ChildComponent1/>
        </>
    );
}

function ChildComponent1() {
    return (
        <div>
            <p>Value of user in child component 1: </p>
            <ChildComponent2/>
            {/* <ChildComponent2 user={props.user}/> */}
        </div>
    );
}

function ChildComponent2() {
    return (
        <div>
            <p>Value of user in child component 2: </p>
            <ChildComponent3/>
            {/* <ChildComponent3 user={user}/> */}
        </div>
    );
}

function ChildComponent3() {
    const user = useContext(UserContext);
    return (
        <div>
            <p>Value of user in child component 3: {user}</p>
        </div>
    );
}

export default UseContextAPIchild;