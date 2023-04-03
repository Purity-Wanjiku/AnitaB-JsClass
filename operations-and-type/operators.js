let a = 30;
console.log(a);
 //Arithmetic operators
 const num = 10;
 const num2 = 30;
 //addition +
 console.log(num + num2);
 console.log(num - num2);
 console.log(num * num2);
 console.log(num / num2);
console.log(num % num2);
var age = 9;
age **= 3

age++;    //increment
console.log({age});
age--    //decrement
console.log("age",age);
age += 5;
console.log("age",age);
let powerNum = num >= num2;
// let notEqual = num != num2;
// console.log("Not Equal1",notEqual);
console.log(powerNum);
var b = 10;
var c = "10";
let comparison = b == c;   //loosely equal to - checks the value only
let notEqual = b != c;     //loosely not equal to - checks value only
console.log("Not equal",notEqual);
console.log("comparison",comparison);
let strictly = b === c;    //strictly equal to
console.log("strictly",strictly);
let strictlyNot = b !== c;     //strictly not equal to - checks value and data type
console.log({strictlyNot});

//logical operators
const age1 = 25;
const age2 = 38;
console.log("num", num); //10
console.log("num2",num2); //30
// let s= ( age1 < age2 || num > num2)   //returns true if one or both expressions are true, otherwise false
if  ( age1 > age2 || num > num2){
console.log("logicals",true);
}
else{
    console.log("logical",false);
}
// console.log (s)
