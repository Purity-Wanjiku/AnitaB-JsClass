let num = [10,20,3,8,7,9,12];
let sum = 0;
for (let element of num){   //Used to iterate over different data types including arrays, strings, sets, maps
    console.log(element);
    sum+=element
}
console.log({sum});


//Both for...in and for...of statements iterate over something. 
//The main difference between them is in what they iterate over. 
//The for...in statement iterates over the enumerable string properties of an object,
// while the for...of statement iterates over values that the iterable object defines to be iterated over.

