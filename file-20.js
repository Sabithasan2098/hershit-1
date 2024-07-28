function about(){
    console.log(`My name is ${this.firstName} and my age is ${this.age}`)
}

const person1 = {
    firstName:"sabit",
    age:23,
    method:about
}
const person2 = {
    firstName:"saiful",
    age:24,
    method:about
}
const person3 = {
    firstName:"sabit",
    age:23,
    method:about
}
const person4 = {
    firstName:"sabit",
    age:23,
    method:about
}
const person5 = {
    firstName:"sabit",
    age:23,
    method:about
}
const person6 = {
    firstName:"sabit",
    age:23,
    method:about
}

person2.method()