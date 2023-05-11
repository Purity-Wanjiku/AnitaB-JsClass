// closures - it remembers what the function had even after it is executed
//This is where an inner function has access to the outer functions’ variables 
//and the global scope’s variables even after the outer function has completed running.
const add = (a) => {
    let num = 20;
     const subtract = (b) => {
        return num - a + b
     } 
     return subtract
}
let nums = add (30);
console.log(nums(25));  //called as  afunction because a value was stored by return 

