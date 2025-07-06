class car{
    #startEngine(){
        console.log('Key in ignition. Engine Started.');
    }

    drive(){
        this.#startEngine();
        console.log('Car is now moving.');
    }
}

const car1 = new car();
car1.drive();
// car1.#startEngine;