import React, { Component } from 'react';

class DataTransferUsingProps extends Component {

    constructor(props){
        super(props);
        console.log("Props Value in child class: ", props);
    }

    render() {
        return (
            <div>
                <h1>_________________________________________________________</h1>
                <h3>Here we're trying to access props of an external file - ClassComponents</h3>
                <h3>I am learning {this.props.value}</h3>
                <h1>_________________________________________________________</h1>
            </div>
        );
    }
}

export default DataTransferUsingProps;