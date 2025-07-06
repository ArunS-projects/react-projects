import React, { Component } from 'react';

class State1 extends Component {
    constructor(){
        super();
        this.state = {
            province: 'Ontario',
            city: 'Toronto',
            postalCode: 'L0R 1B2',
            streetName: '5-488 Barter Street'
        }
        this.updateAddress = this.updateAddress.bind(this);
    }
    updateAddress(){
        console.log('Function called successully');
        this.setState({
            province: 'Alberta',
            city: 'Guelph', 
            postalCode: 'L7P 0N4',
            streetName: 'Fifth Street'
            
        })
        console.log(`setState executed`);
    }

    // function call at line 32 can be replaced with bind method(see line 12)
    render(){
        return (
            <div>
                <h1>We're working with state here.</h1>
                <h3>The current address is {this.state.streetName}, {this.state.city}, {this.state.province} - {this.state.postalCode}</h3>
                {/* <button onClick = {() => this.updateAddress()}>Update Address</button> */}
                <button onClick = {()=> this.updateAddress()}>Update Address</button>
            </div>
        )
    }
}

export default State1;