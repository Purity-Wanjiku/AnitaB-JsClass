//callbacks - These are functions placed as arguments to other functions.
const sum = (num,a, callback) => {
    console.log(callback(a));
    let value = callback(a);
    console.log( num + value);
}
sum(20,5,function(a){
    return a
})
const summation =(num,a,callback)=>{
    let value= callback;
    console.log(value);
}
summation (20,5,function(a){return a});