//how to create objects in javascript

let Person = {};
//that's it


Person = {
    firstName : "md",
    middleName : "rah",
    lastName : "an",
    fullName : firstName + " " + middleName + " " + lastName,
    age : 33
    greet : function(){
        console.log("Hello, My name is " + this.fullName);
    }
}
//
