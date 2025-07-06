import React, {useReducer} from 'react';

const initialState = {count:0};
function UseReducer(state, action){
    switch(action.type){
        case 'increment':
        return {
           count: state.count+1
        };
        case 'decrement':
        return {
           count: state.count-1
        };
        default:
        return state;
    }
}

const CounterComponent = () =>{
    const [state, dispatch] = useReducer(UseReducer, initialState);   
    return (
        <div>
            <p>Output of useReducer: <br/>Count: {state.count}</p>
            <button onClick={() => dispatch({type: 'increment'})}>Increment</button>
            <button onClick={() => dispatch({type: 'decrement'})}>Decrement</button>
        </div>
    );
}

export default CounterComponent;