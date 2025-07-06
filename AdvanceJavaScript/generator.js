function * abc(){
    yield 1;
    yield 2;
    yield 4;
    yield 100;
}
const gen1 = abc();
console.log(gen1.next().value);
console.log(gen1.next().value);
console.log(gen1.next().value);
console.log(gen1.next().value);
console.log(gen1.next().value);
console.log(gen1); //prints the object

function* abc1(){
    yield 'I have applied for a position';
    yield 'My interview is scheduled';
    yield 'I appeared for the interview';
    yield 'I am awaiting a response regarding selection/rejection';
    yield 'I am selected';
}

const gen2 = abc1();
console.log(gen2.next().value);
console.log(gen2.next().value);
console.log(gen2.next().value);
console.log(gen2.next().value);
console.log(gen2.next().value);
// console.log(gen1);