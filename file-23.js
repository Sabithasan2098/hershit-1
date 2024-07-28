const obj1 = {
    key1:"value1",
    key2:"value2"
}

// make obj1 to obj2------->
const obj2 = Object.create(obj1)

// object2-------->
obj2.key3 ="value3"
obj2.key4 ="value4"
obj2.key5 ="value5"
    
console.log(obj2.key4);