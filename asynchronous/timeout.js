//setTimeout() - Executes a block of code after a specific time. It executes only once.
//asynchronous functions-conducts long running tasks. It does not stop synchronous functions from running, 
//it runs asynchronous functions after they are ready (functions that have delayed execution)
//setTimeout() is an asynchronous function
const work = () => {
    console.log('Let us work');
}
work();

const reminder = () => {
    console.log('Please attend the meeting');
}
setTimeout(reminder,4000);  //is called after 4 seconds
setInterval(reminder,1000)
//  clearInterval(reminder,3000)

const takeBreak= () => {
    console.log('Please rest');
}
takeBreak();

