//this file has all the hands on from Day 2 video
//so far object and functions written as below:
function greetSignedInUser(userName){
    if(userName && userName != "")
        console.log(`Hello, ${userName}!`);
    else   
        console.log('Hello,'+ user.name);
}
const user = {
    name: "John Doe123",
    greetSignedInUser
}
user.greetSignedInUser();
user.greetSignedInUser('');
user.greetSignedInUser('Janet Doe');

//enhanced object literal allows to define fuunction within the object itself
const person = {
    userName: 'Becca',
    greetUser(){
        console.log(`Hi, ${this.userName}!`);
    },
    adieu(){
        console.log(`Goodbye, ${this.userName}!`);
    }
}
person.greetUser(person.userName);
person.adieu(person.userName);

//Modules in JS
export const studentName = 'Hannah';
export const majorInSubject = 'Philosophy';
export function graduate(fetchedDatafromAnotherModule){
    return (`${studentName} is majoring in ${majorInSubject} from ${fetchedDatafromAnotherModule}`);
    console.log(`${studentName} is majoring in ${majorInSubject} from ${fetchedDatafromAnotherModule}`);
}
graduate();
