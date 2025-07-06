//map function on arrays
const array1 = [1,2,3,4,5,6,7,8,9,10];
const array2 = array1.map((currentVal, index, array) => {
    return currentVal*2;
})
console.log(`Original Array: ${array1}`);
console.log(`Map Function Result: ${array2}`);

//filter function on arrays
//Solution 1: Filter out even nos. from an array
const array3 = array1.filter((currentVal, index, array) => {
    if(currentVal%2 == 0){
        return currentVal;
    }
})
console.log(`Filter Function Result: ${array3}`);

//Solution 2: Filter out the elements from the array that has length>5
const array4 = ['Jane', 'Janet', 'Hannah', 'Garrett', 'Anna', 'Nick'];

const array5 = array4.filter((currentVal) => {
    if (currentVal.length >= 5)
        return currentVal;
})
console.log('The strings that have length more than 5 are:', array5);

//reduce() in arrays
const sum = array1.reduce((res, currentVal, index, array) => {
    return res = res + currentVal;
}, 0)
console.log(`The sum is: ${sum}`);

const avg = array1.reduce((accumulator, cVal) =>{
    accumulator = accumulator + cVal;
    return accumulator/array1.length;
},0)
console.log(`the average of the sum of all elements in the array: ${avg}`);

const appendedArray = array4.reduce((acc,curr) =>{
    return acc = acc + curr;
}, '')
console.log(array1.length);
console.log(`The appended array is: ${appendedArray} and it's length is ${appendedArray.length}`);
