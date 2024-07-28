const numbers = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9]
console.log(numbers);
const uniqueNumbers = new Set(numbers)
console.log(uniqueNumbers);

// length---------------------->
let length = 0;
for(let element of uniqueNumbers){
    length++
}
console.log(length);