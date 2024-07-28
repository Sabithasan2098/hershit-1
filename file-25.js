function Name(firstName,lastName){
    this.firstName = firstName
    this.lastName = lastName
}
Name.prototype.about = function(){
    return `He is mr ${this.firstName} ${this.lastName} `
}


const user1 =new Name("sabit","hasan")

 console.log(user1.about());
