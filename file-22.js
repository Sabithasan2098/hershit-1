const methods = {
    about : function(){
        return `My name is ${this.name} and my age is ${this.age}`
    },
    is18 : function(){
        const result = this.age >= 18 ? "true" : "false"
        return result
    }
}

const createObj  = (name,age,passion,job) =>{
const user = {}
user.name = name,
user.age = age,
user.passion = passion,
user.job = job,
user.is18 = methods.is18,
user.about = methods.about

return user
}

const user1=createObj("sabit",17,"job hunter","learning")
console.log(user1.about());
console.log(user1.is18());

