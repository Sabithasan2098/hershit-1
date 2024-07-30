class CreateObj {
    constructor(name, age, passion, job){
        this.name = name;
        this.age = age;
        this.passion = passion;
        this.job = job;
    }
    about(){
        return `My name is ${this.name} and my passion is ${this.passion}`
    }
    match(a){
        if(this.name.toUpperCase() ===a.toUpperCase()){
            return true
        }return false
    }

}

const user = new CreateObj("sabit",23,"codding","learning")

console.log(user.about());

console.log(user.match("sabit"));

// if you want to see whats the protoypes are ?
console.log(Object.getPrototypeOf(user));