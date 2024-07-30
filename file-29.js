//static, getter and setter
class Dog1{
    constructor(age,name){
        this.age = age;
        this.name = name
    }

    static isSupperCute(age){
       return age <= 2 ? true : false
    }
    
}

console.log(Dog1.isSupperCute(5));



// getter and setter perfect example
class Dog {
    set about(fullName) {
        const [firstName, lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get about() {
        return `My dog's first name is ${this.firstName} and last name is ${this.lastName}`;
    }
}

const myDog = new Dog();
myDog.about = "Rover Brown"; // about setter কল করা
console.log(myDog.about); // Output: My dog's first name is Rover and last name is Brown
