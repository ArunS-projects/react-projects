import {React, Component} from "react";
import DataTransferUsingProps from "./DataTransferUsingProps";
import expressService from "./service/expressService"

//extends keyword converted a class to react class in above line
class ClassComponents extends Component{
    
    //Initialize states in class component:
    constructor(props){
        super(props);    //super is mandatorily the first statement after opening sonstructor. else there will be errors.
        this.state = {
            profile: 'MERN Stack' //this is dynamic and hence a state
        }
    }
    updateState(){
        expressService()
        this.setState({
            profile: 'MEAN Stack'
        })
    }


    render(){
        // return <h1>Hands-on for Class Component. </h1>///this allows a single component only
        // return <h1>Return statement can also be used here. </h1>

        //this will allow multiple lines to execute provided that there's atleast one <div> </div> or a <></>. See below
        return(
            <>
            <h1>Hands-on for Class Component for learning {this.state.profile}</h1>
            {/* ${this.state.profile} - this is a JSX Expression */}
            <button onClick = {() => this.updateState()}>Change State</button>
            <h1>We just saw how to create multiple components in a return statement for class component.</h1>
            <h2>All we have to do is within return block enclose all the statements either within an empty tag(also called JSX Fragment) or a div tag.</h2>
            <DataTransferUsingProps value = {this.state.profile}/>
            </>
        )
            
    }
}

//use rcc shortcut in VS to get a boiler plate for class component. 
//this allows to skip writing each and every statement in the js file.
//but extension react code snippets should be available

export default ClassComponents;