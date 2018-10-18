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
let manager = new Person("rahim", 33);
let employee1 = new Person("ravi", 32);
let employee2 = new Person("Aashish",32);
let employee3 = new Person("vrinda", 35);
let employee4 = new Person("Shirish", 38);

console.log (manager.name);
console.log(employee.name);
manager.greet();

//es6 class

class Pers{
    
    constructor(first, middle, last, age){
        // getter properties from the parameters
        this.firstName = first;
        this.middleName = middle;
        this.lastName = last;
        this.age = age;
        // setter properties from the parameters
        this.fullName = this.firstName + " " + this.middleName + " " + this.lastName;
        this.hairColor = "black"; // notice it is string
        
    }
    greet(){
        console.log("Hello my name is " + this.name);
    }
}
let me = new Pers("rah", "md", "an", 33);
console.log(me.fullName);
