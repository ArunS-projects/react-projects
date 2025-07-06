//promise definition/creation code
const promise1 = new Promise((resolve, reject) => {
    resolve('Success!');
    // reject('Failure :(');
});
//promise definition/creation code ends here

//promise handling begins here
promise1.then((value) => {
    console.log(value);
}).

catch((error) =>{
    console.log(error);
});
//promise handling ends here

//Example of Promise Chaining:
const start = Date.now();
console.log(start);

return Promise.resolve().
    then(() => new Promise(resolve => setTimeout(resolve, 50))).
    then(() => new Promise(resolve => setTimeout(resolve, 50))).
    then( v =>{
        console.log(Date.now()-start);
        
    });
