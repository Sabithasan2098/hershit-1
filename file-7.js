const result = (array,terget) =>{
    for(let i=0; i < array.length; i++){
        if(array[i] === terget){
            return i
        }
    }
    return "-1"
}
console.log(result([1,2,3,4,5,6,7,8,9],1));