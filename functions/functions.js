//A function is a reusable set of statements to perform a task or calculate a value.
//How to write : function name(params / arguments){  }
//calling functions:
//When a function is called, the code inside its function body runs. 
//Arguments are values passed into a function when it is called.
//NAMED FUNCTIONS
function sum(num1,num2) {
    return (num1 + num2)
}
console.log(sum(2,4)); 

//ARROW FUNCTION
//Does not require the function keyword.
//It uses a fat arrow => to separate the parameter(s) from the body.
//variations:
//1.One with a single parameter do not require () around the parameter list.
//2.One with a single expression can use the concise function body.
//it returns the result of the expression without the return keyword.

const printHello = () => {
    console.log('hello');
};
printHello()

const checkWeight = weight => {
    console.log(`Baggage weight: ${weight} kilograms.`);
}
checkWeight(30)

const product = (n1,n2) => {
return n1 * n2
}
console.log(product(2,3));
//concise arrow functions
const multiply = (a,b) => a * b;
console.log(multiply(10,30)); 

//ANONYMOUS FUNCTIONS
//Do not have a name property
//They can be defined using the function keyword, or as an arrow function
const rocketToMars = function () {
    return 'BOOM!';
};
console.log(rocketToMars());
//Not sure
const rocketToJupiter = () => 'WRONG PLANET!';
console.log(rocketToJupiter());
//VOID FUNCTIONS
//Js uses void keyword for denoting expressions that return a value of undefined
// This allows functions to work as expressions and not declarations
void function printHi() {
    console.log('Hi, CodeHive!');
}();

//ARROW FUNCTIONA in details
//They can be defined with zero or more parameters, on one or more lines
//Use of () 
//There is more than one parameter.
//There are no parameters.
//The single parameter is a destructured object.
//There are default or rest parameters involved.
//Arrow functions with a single expression have no curly brackets { }, it uses concise body function to return result
