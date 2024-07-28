const key = "email"

const person = {
    name:"sabit",
    age:22,
    friends:["saiful","naime",'ajmir']
}
// person[key]="sabitHasan@gmail.com"
// console.log(person);
for(let key in person){
    // console.log(person[key]);
    console.log(`${key}:${person[key]}`);
}

console.log(typeof person);
const value = Array.isArray(person)
console.log(value);