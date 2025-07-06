function person(name, org, location){
    this.name = name;
    this.org = org;
    this.location = location;
}
person.prototype.admin = 'Rick';
person.prototype.briefIntro = function(){
    person.prototype.admin = 'Sonia';
    console.log(`Hello, my name is ${this.name} and I work in ${this.org} industry.`);
}
person.prototype.workLocation = function(){
    console.log(`I am based out of ${this.location}.`);
}

const person1 = new person('Alison', 'automobile', 'Berlin');
console.log('Print the person object:', person1);
console.log('Admin is: ', person1.admin);
person1.briefIntro();
person1.workLocation();
console.log('Admin got updated to: ', person1.admin);
const person2 = new person('Robert', 'fashion', 'Paris');
person2.briefIntro();
person2.workLocation();

