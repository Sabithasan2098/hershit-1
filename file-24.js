const methods = {
    about : function(){
        return `My name is ${this.name} and my age is ${this.age}`
    },
    is18 : function(){
        const result = this.age >= 18 ? "true" : "false"
        return result
    },
    myJob : function(){
        return `I am continious ${this.job}`
    }
}

const createObj  = (name,age,passion,job) =>{
const user = Object.create(methods)
user.name = name,
user.age = age,
user.passion = passion,
user.job = job

return user
}

const user1=createObj("sabit",17,"job hunter","learning")
console.log(user1.about());
console.log(user1.is18());
console.log(user1.myJob());