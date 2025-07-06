var a = 10;
console.log(a);
a = 'ReactJS';
console.log(a);

{
    var str = "Within Block";
    console.log(str);

    let str1 = "Block scope";
    console.log(str1);

    const c = 10;
    console.log(c);
}

console.log(str);
//console.log(str1);
// console.log(c);

//function in JS:
var a = 2;
var b = 8;

console.log("Regular Function: ", sum(a, b));

function sum(x, y){
    return x+y;
}

// Arrow function - single line syntax
const sum1 = (a,b) => a+b;
console.log("Arrow Function:", sum1(23, 37));

// Arrow function - multiple line syntax
let subtract = (a,b) => {
    console.log("For subtracting two nos.")
    return a-b;
}
console.log("Results of num1-num2 is ", subtract(5,2));

let divide = (a,b) => {
    console.log("For subtracting two nos.")
    return a/b;
}
console.log("Results of num1/num2 is ", divide(4,2));


//Template Literals
//Example 1
const name = "Alice";
const bookName = `${name} in Wonderland`;
console.log(bookName);

//Example 2 of Template Literal
const memberName = 'Leo';
const libraryName = 'Pune City Public Library';
var libraryLocation = 'FC Road'

let printStatement = `My name is ${memberName}. I am a proud member of ${libraryName} located at ${libraryLocation}.`
console.log(printStatement);
console.log('Print without using variable: ', `My name is ${memberName}. I am a proud member of ${libraryName} located at ${libraryLocation}.`)

let abc = 1;
abc = 'a';
console.log(abc);