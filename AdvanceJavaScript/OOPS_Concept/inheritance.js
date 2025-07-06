class animal{
    constructor(name){
        this.name = name;
    }
    speak(){
        console.log(`${this.name} makes sound.`);
    }
}

class dog extends animal{
    speak(){
        console.log(`${this.name} barks!`);
    }
}


const dog1 = new dog('Bubster');
dog1.speak();
