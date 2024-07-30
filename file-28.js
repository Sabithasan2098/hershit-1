class Dog{
    constructor(age,name){
        this.age = age;
        this.name = name
    }
    about(){
        return `My dogge name is ${this.name}`
    }
    isSupperCute(){
       return this.age <= 2 ? true : false
    }
}

class Cat extends Dog{
    constructor(age,name,speed){
        super(age,name);
        this.speed = speed;
    }
    // when constructor find the about method is here then constructor
    // call this about, when did't find here then it's gose to the parent class

    about(){
        return `My cat is ${this.age} years old`
    }
    running(){
        return `My ${this.name} running ${this.speed} km per hour`
    }
}

const animal = new Dog(2,"tomme")
const animal2 = new Cat(3,"tom",45)
console.log(animal2.running());
console.log(animal2.about());