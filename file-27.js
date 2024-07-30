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

}

const animal = new Dog(2,"tomme")
const animal2 = new Cat(3,"tom")
console.log(animal2.isSupperCute());