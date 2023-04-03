let num = [10,20,3,8,7,9,12];
let sum = 0;
for (let element of num){   //Used to iterate over different data types including arrays, strings, sets, maps
    console.log(element);
    sum+=element
}
console.log({sum});