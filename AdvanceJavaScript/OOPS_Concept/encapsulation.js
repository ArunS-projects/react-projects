class employeeData{
    empId; // = 20220201;
    empName; // = 'Jane Doe';
    #privateage; // = 29;
    #package; // = '24LPA';
    #contactNumber = 9867345671;
    #gender = 'F';

    constructor(name, age, id){
        this.privateage = age;
        this.empName = name;
        this.empId = id;
        // this.#age = age;
        // this.#package = package;
    };

    get empAgeFunc(){
        return this.privateage;
    };

    set empAgeFuncToSet(newAge){
        if(newAge > 0){
            this.#privateage = newAge;
        }else{
            console.log('Age should be a positive number');
        }
    };
}

const emp1 = new employeeData('Jane Doe', 29, 1);
console.log(emp1.empName);
console.log(emp1.empAgeFunc);
console.log(emp1.empId);

const emp2 = new employeeData('John Doe', 31, 2);
console.log(emp2.empName);
console.log(emp2.empAgeFunc); //get function called without braces()
console.log(emp2.empId); 
emp1.empAgeFuncToSet = -1; //set function called without braces()
