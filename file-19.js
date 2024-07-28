const person = new Map()

person.set("firstName","sabit")
person.set("lastName","hasan")
// console.log(person.get("firstName"));

for(let key of person.keys()){
    console.log(key);
}

