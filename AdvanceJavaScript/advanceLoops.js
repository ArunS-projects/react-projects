const array1 = [1,2,3,4,5,6];
array1.forEach((currentVal, index, array) => {
    console.log(`Value at ${index} is: ${currentVal}`);
    console.log(currentVal, index, array);
})

const array2 = ['Jane','Doe',24, true, null ,6];
array2.forEach((currentValOfArray2, i, arr) => {
    console.log(`Value at ${i} is: ${currentValOfArray2} of ${arr}`);
    console.log(currentValOfArray2, i, arr);
})

// Solve for string - 'MERN STACK DEVELOPER' to fetch each and every character of the string
/* const str1 = 'MERN STACK DEVELOPER';
str1.forEach((currentChar) => {
    console.log(currentChar);
})*/
//forEach won't work here. forEach is only applicable on Arrays

const str1 = 'MERN STACK DEVELOPER';
let strRes = [];
for(let i = 0; i < str1.length; i++){
    // console.log(str1[i]);
    strRes.push(str1[i]);
}
console.log(strRes);

//using for...of loop to solve the above
for(len of str1){
    console.log(len);
}

//for...of loop on MAP
const map1 = new Map();
map1.set('studentName', 'Anna Francis');
map1.set('registrationNumber', 202501);
map1.set('grade', 'KG1');
map1.set('gender', 'F');
map1.set('age', 3);
console.log(map1);

for(iterate of map1){
    // console.log(iterate);
    console.log(iterate[0], iterate[1]);
    // console.log(iterate[1]);
}

//for...of on SET
const set1 = new Set(array2);
for(i of set1){
    console.log(`Print values of Set: ${i}`);
}

//for...of in Objects is not applcable!!
const student = {
    id: 20250001,
    name: 'Aakash',
    gender: 'M',
    grade: 'KG1',
    section: 'Lily'
}
for(objVal in student){
    console.log(objVal);
    // console.log(objVal.id);
    console.log(student[objVal]);
    // console.log(objVal[student]);
    console.log(`key: ${objVal}, value: ${student[objVal]}`);
}