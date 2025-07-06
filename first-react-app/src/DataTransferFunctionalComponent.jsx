import React, { Component } from 'react';

class DataTransferFunctionalComponent extends Component {

    constructor(props){
        super(props);
        console.log('Value received in Props: ', props);
    }
    render() {
        return (
            <div>
            <h1>_________________________________________________________</h1>
            <h2>Access Data from Functional Component class:</h2>
            <h2>Name: {this.props.data.name}</h2>
            <h2>School: {this.props.data.school}</h2>
            <h2>Subjects: {this.props.data.subjects}</h2>
            <h1>_________________________________________________________</h1>
            </div>
        );
    }
}

export default DataTransferFunctionalComponent;