import React from "react";
import DataTransferFunctionalComponent from "./DataTransferFunctionalComponent";

function FunctionalComponents(){
    const data = {
        name: 'Paris',
        school: 'Yale',
        gender: 'F',
        subjects: ['Public Speaking', 'Communication', 'Debate', 'Psychology'],
    }
    let subjectsStr = '';
    data.subjects.forEach(element => {
        if(subjectsStr === ''){
            subjectsStr = element;
        }else{
            subjectsStr = subjectsStr + ', ' + element;
        }
    });

    return(
        <>
            <h1>Format for Functional Components in ReactJS</h1>
            <h1>
                {data.name} is a student at {data.school}. She has subjects opted for are {subjectsStr}.
            </h1>
            <DataTransferFunctionalComponent data = {data}/>
        </>
    )
}

//use rsf shortcut in VS to get a boiler plate for functional component. 
//this allows to skip writing each and every statement in the js file.
//but extension react code snippets should be available
export default FunctionalComponents;