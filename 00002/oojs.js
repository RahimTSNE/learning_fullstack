function Person(name,age){

// this are the properties of object
    this.name = name;
    this.age = age
// properties can be called as Person.name


    
// this are the methods of object
    this.greet = function(){
                     console.log("hello" + this.name);
                     }
// method will be called as Person.greet()
// pay attention to the bracket

}
// this is how you create new object
let manager = new Person("rahim", 33)
let employee = new Person("ravi", 32)

console.log (manager.name);
console.log(employee.name);
manager.greet();

//es6 class

class Person{
    
    constructor(name){
        this.name = name;
    }
    greet(){
        console.log("Hello my name is " + this.name);
    }
}
