import React, { Component } from 'react';

class Incrementor extends Component {

    constructor(){
        super();
        this.state = ({
            count: 0
        })
    }

    updateCountValue(){
        this.setState(prevState => ({
            count: prevState.count + 1
        }))
    }

    decrementCountValue(){
        this.setState(prevState => ({
            count: prevState.count - 1
        }))
    }

    resetCountValue(){
        this.setState(prevState => ({
            count: 0
        }))
    }
    render() {
        return (
            <div>
                <h1>----------------------------------------------------</h1>
            <h2>Creating an incrementor here:</h2>
            <h2>Previous value of count is {this.prevState}</h2>
            <h2>Count is {this.state.count}</h2>
            <button onClick={() => this.updateCountValue()}>Increment</button>
            <button onClick={() => this.decrementCountValue()}>Decrement</button>
            <button onClick={() => this.resetCountValue()}>Reset</button>
            </div>
        );
    }
}

export default Incrementor;