// কনস্ট্রাক্টর ফাংশন
function CreateObj(name, age, passion, job) {
    this.name = name;
    this.age = age;
    this.passion = passion;
    this.job = job;
  }
  
  // প্রোটোটাইপ মেথড যোগ করা
 CreateObj.prototype.about = function() {
    return `My name is ${this.name} and my age is ${this.age}`;
  };
  
 CreateObj.prototype.is18 = function() {
    return this.age >= 18 ? "true" : "false";
  };
  
 CreateObj.prototype.myJob = function() {
    return `I am continious ${this.job}`;
  };
  
  // নতুন অবজেক্ট তৈরি করা
  const user1 = new CreateObj("Sabit", 17, "job hunter", "learning");
  
  // প্রোটোটাইপ মেথড কল করা
  console.log(user1.about());  // Output: My name is Sabit and my age is 17
  console.log(user1.is18());   // Output: false
  console.log(user1.myJob());  // Output: I am continious learning
  