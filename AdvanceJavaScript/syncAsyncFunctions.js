// synchronous function
// const sum = 0;
function syncFunction(){
    console.log('This log will execute first');
    let num1 = 23;
    console.log(`Print value for number declared at line 4: ${num1}`);
    let num2  = 32;
    console.log(`Print value for number declared at line 6: ${num2}`);
    const sum = num1 + num2;
    console.log(`Print sum of numbers calculated at line 8: ${sum}`);
}
const sum = 0;
console.log(`Value of sum outside function: ${sum}`);
syncFunction();

//Aynchronous function:
/*console.log('This is an asynchonous function created below');
 async function asyncFunction(){
    setTimeout(() => {
        console.log('Within an async function the code is not halted till it is executed.');
        console.log('Rest of the code executes even if async function is still exeuting');
        let num1 = 12;
        console.log(`Print value for number declared at line 20: ${num1}`);
        let num2  = 38;
        console.log(`Print value for number declared at line 22: ${num2}`);
        const sum = num1 + num2;
        console.log(`Print sum of numbers calculated at line 24: ${sum}`);
    }, 10000)
 }
 asyncFunction();
 console.log('Line 30 outside the async function call');*/


 const array1 = ['Jane', 'Janet', 'Hannah', 'Garrett', 'Anna', 'Nick'];
 console.log('Print original array:', array1);
 let filteredArray = [];
 async function filterNamesStartingWithJ(){
    setTimeout(()=> {
        filteredArray = array1.filter((currVal) => {
            for(let v = 0; v< currVal.length; v++){
                if(currVal.charAt(v) == 'N' || currVal.charAt(v) == 'n'){
                    return currVal;
                }
            }
        })
        console.log('Print Within async function:', filteredArray);
    }, 10000)
 }
 filterNamesStartingWithJ();
 console.log('function called', filteredArray);