//How a data is stored and accessed in memory on the basis of that 
//Data Types are 2 types primitive and non primitive

//primitive
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score=100
const islog=Symbol('123')
const another=Symbol('123')
console.log(islog==another);

//Big int
const bigNumber=2345678901234566n


//Reference Type(Non-Primitive)
//Array, Objects, Functions


const heros=["shaktiman","naagraj"]

//object
let myObj={
    name:"Dinaaz",
    age :19,
}

//function

const  myFunction=function () {
    console.log("Hello World")
    
}

 //to identify datatypes
 console.log(typeof myFunction);
 //NOTE: function returns function as a data type but it is called as "object function"
 
