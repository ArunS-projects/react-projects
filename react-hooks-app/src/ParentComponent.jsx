import React,{useState} from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent(props) {

    const [user] = useState('John Doe');
    return (
        <div>
            <b>Parent Component Output</b>
            <p>Value of user in div in return of functional class: {user}</p>
            <ChildComponent user={user}/>
        </div>
    );
}

export default ParentComponent;