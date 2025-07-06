import React from 'react';
import {useState,createContext} from 'react';
// import ChildComponent from './ChildComponent';
import {UseContextAPIchild} from './UseContextAPIchild';

//initialization of createContext
export const UserContext = createContext();

function UseContextAPI(props) {
    const [user] = useState('John Doe');

    
    return (
        <>
            <div>In components created above - <b>ParentComponent</b> and <b>ChildComponent</b>, we tried to access state of a var from parent to child component using the concept of 'Prop Drilling'
                <br/>Prop drilling refers to the practice of passing data through several layers of nested components in React, even though intermediate components don’t directly utilize this data. This means that a middle component doesn’t necessarily need the data, but it must still pass it down to the next component, creating an unnecessary and sometimes lengthy chain of props.
                <br/>Prop drilling is problematic because: <br/>
                <ul>
                    <li><b>Code Complexity:</b> It makes the component tree overly complicated, as intermediate components receive and forward props without using them, cluttering your code and causing confusion.</li>

                    <li><b>Maintenance Overhead:</b> Any change to the props requires updating multiple components, which can be time-consuming and error-prone.</li>
                    <li><b>Reduced Readability:</b> It becomes difficult to trace how and where data flows through components, making debugging and development more challenging.</li>
                    <li><b>Tight Component Coupling:</b> Components become less reusable and more tightly coupled, leading to reduced flexibility and difficulties in refactoring.</li>
                    <li><b>Scalability Issues:</b> As your application grows, prop drilling worsens, leading to further complexity and making the app harder to scale effectively.</li>
                </ul>
                To overcome this problem, we use <b>Context API</b>. The React Context API provides a way to share values (like state, functions, or constants) between components without explicitly passing props.
                <UserContext.Provider value={user}>
                    This is inside <b>.Provider</b> which lets you provide the context value to components. Provider wraps the components into a context provider to specify the value of this context for all components inside.<br/>
                    Value of user in parent component is: {user} <br/>
                <UseContextAPIchild/>
                </UserContext.Provider>
            </div>
        </>
    );
}

export default UseContextAPI;