const users = [
    {name:"sabit",age:22},
    {name:"sabit",age:21},
    {name:"sabit",age:20},
    {name:"sabit",age:23},
    {name:"sabit",age:25},
    {name:"sabit",age:27},
    {name:"sabit",age:28},
    {name:"sabit",age:29},
]

const find = users.find((a) => a.age > 25)
console.log(find);
const find2 = users.filter((a) => a.age > 23)
console.log(find2);