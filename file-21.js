
 function about(work){
    console.log(`My name is ${this.name} and my sge is ${this.age} and i am a ${work}`);
    // console.log(work);
}
const user1 = {
    name:"sabit",
    age:"23",
    about2:function (work){
        console.log(`My name is ${this.name} and my sge is ${this.age}`);
        // console.log(work);
    }
}
const user2 = {
    name:"saiful",
    age:"25",
   
}
const user3 = {
    name:"avi",
    age:"24",
   
}

about.call(user3,"programer")
about.apply(user3,["programer","social"])
const func =about.bind(user3,"programer")
func()

const func2 = user1.about2.bind(user3)
func2()
