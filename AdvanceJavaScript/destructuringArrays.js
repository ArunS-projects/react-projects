const arr = [10, 20, 30, 40];
console.log(arr);

let a = arr[1];
console.log(a);

for(let i = 0; i<arr.length; i++){
    let arrayIndex = i+1;
    console.log('Array element at ' ,arrayIndex , 'is ', arr[i]);
}

//below code will store each array element in a different variable - this is array destructuring 
console.log('storing each array element in a variable/Array Destructuring');
const [u,b,c,d,e] = [10, 20, 30, 40, 50];
console.log(u,b,c,d,e);

//Object
const carObj = {
    brand: "TATA",
    model: "Punch",
    price: 1000000,
    city: "Pune",
    onRoadPrice: false,
    state: "MH"
}
console.log("Car Details: ",carObj);
console.log(carObj.brand, carObj.model, carObj.price);

//Object Destructuring
console.log("Object Destructuring");
const {brand: brandName, model: modelName, price: cost, city: city, onRoadPrice: onRoadPrice, state: region} = {
    brand: "TATA",
    model: "Punch",
    price: 1000000,
    city: "Pune",
    onRoadPrice: false,
    state: "MH"
}

console.log(brandName, modelName, cost, city, region, onRoadPrice);
console.log('End of Object Destructuring');
//Example 2 of Object Destructuring:
const {name: myName, age} = {name: 'Bobby', age: 29};
console.log(myName, age);

//Default Parameters:
let guestName;
function greetGuest(name = "Unknown Guest"){
    if(name == ""){
        console.log(`Hello, he who must not be named!`);
    }else{
        console.log(`Hello, ${name}!`);
    }
}
greetGuest();
greetGuest("");
greetGuest("Voldemort");

//end of default parameters

//Spread operator:
const array1 = ['one', 2, 'three'];
const array2 = [...array1, 4, 'five', 6];
console.log(array2);
console.log('we appended array2 to array1 using Spread Operator');

//concatenating 2 arrays without using spread operator and using concat function
const arr1 = ['one', 2, 'three'];
const arr2 = [4, 'five', 6];
const arrRes = arr1.concat(arr2);
console.log('Concat function to join 2 arrays:');
console.log(arrRes);

//Spread operator can also be used to combine objects
const personalDetails = {
    employeeName: 'Jane Doe',
    employeeGender: 'Female'
 }

 const professionalDetails = {
    ...personalDetails,
    employeeDepartment: 'Finance',
    employeeSalary: '$2000'
 }

 console.log(professionalDetails);

 //Rest Parameter:
 function sum(...numbers){
    return numbers.reduce((acc, num) => acc+num, 0);
 }
 console.log(sum(1,2,3,4,5,6,7,8,9,10));