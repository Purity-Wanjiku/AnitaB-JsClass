//This is used to check if an asynchronous operation is successfully completed or not. 
//It has three states, ‘pending’, ‘fulfilled’, ‘rejected’.
let success = false;
let promise = new Promise((resolve,reject) => {
    if(success){
        resolve ("I succeeded");
    }else{
        reject("I am still looking for a job");
    }
 });
promise.then(() => {
    console.log("I will celebrate");
})
promise.catch(() => {
    console.log("I will upskill");
})
promise.finally(() => {
    console.log("I am still worthy");
})
console.log({promise});

