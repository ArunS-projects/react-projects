//demo Maps in JS
const map = new Map();
map.set('studentName', 'Anna Francis');
map.set('registrationNumber', 202501);
map.set('grade', 'KG1');
map.set('gender', 'F');
map.set('age', 3);

console.log(map);
console.log(map.get('studentName'));
console.log(map.get('grade'));
console.log(map.get('age'));

var sName = (map.get('studentName'));
console.log(sName);

//solve to remove duplicate entries from an array
const array1 = [60,10,20,30,10,40,20,50,-5,0,-5]
const array2 = [];
for(let i = 0; i<array1.length; i++){
    if(!array2.includes(array1[i])){
        array2.push(array1[i]);
    }
}
console.log('Original array: ',  array1);
console.log('Sorted array: ', array2);
console.log('Sorted array: ', array2.sort())
//end of removing duplicate entries from the array

//SETS
const set = new Set(array1); // returns datatype SET and not ARRAY
const set1 = new Set(array2.sort()); // returns datatype SET and not ARRAY
console.log("Set data tyoe removes duplicate entries, but doesn;t sort automatically! ", set);
console.log('Sorted set ', set1);

const set3 = [...new Set(array1.sort())];
console.log('Converted to array data type:', set3);

const names = ['Jane', 'Janet', 'Anna', 'Anna', 'Becky', 'Becca', 'Joan', 'Joan'];
console.log('Sorted: ', names.sort());
const setNames = new Set(names.sort());
console.log('Sorted Set: ', setNames);