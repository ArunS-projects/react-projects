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

class cat extends animal{
    speak(){
        console.log(`${this.name} meows!`);
    }
}

class horse extends animal{
    speak(){
        console.log(`${this.name} neighs!`);
    }
}

class human extends animal{
    speak(){
        console.log(`${this.name} talks in clear words!`);
    }
}

const dog1 = new dog('Bubster');
dog1.speak();
const cat1 = new cat('Crookshanks');
cat1.speak();
const horse1 = new horse('Dash');
horse1.speak();
const human1 = new human('Robert');
human1.speak();