//Async is a keyword you use before a function
//It makes the function asynchronous
//Asynchronous functions return a promise.
//The await keyword is used to wait for the asynchronous operation. 
let success = true;
let promise = new Promise((resolve,reject) => {
    if(success){
        setTimeout(() => {resolve ("I succeeded")},4000);
    }else{
        setTimeout(() => {reject("I am still looking for a job")},5000);
    }
 });
promise.then(() => {
    console.log("I will work hard");
})
promise.catch(() => {
    console.log("I will upskill");
})
promise.finally(() => {
    console.log("I am still worthy");
})

console.log(promise);

const student = async () => {        //async always use await with it   
    let result = await promise          //try and catch
    console.log({result});
}
student();
