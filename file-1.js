const array1 = ["item1","item2","item3"]

// const array2 = [...array1]

// console.log(array1);
// console.log(array2);
// console.log(array1[0]);
// let array2 = []
//  for(let i = 0; i < array1.length; i++){
// array2.push(array1[i].toUpperCase())
//  }

//  console.log(array2)
const loop = (array) =>{
for(let items of array){
   console.log(items);
}

}
loop(array1)
// for(let items of array1){
//     console.log(items);
// }