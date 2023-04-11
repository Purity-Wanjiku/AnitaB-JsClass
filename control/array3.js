//Write a function that accepts an array of strings 
//and console.logs each element using a for loop.
let arr = ["good","bad","food"]

function arrays(arr) {
    for (i = 0; i < arr.length; i++) {
        console.log("arrays:",arr[i]); 
    }
}
arrays(arr);

//Write a function that accepts an array of numbers 
//and uses the forEach() method to console.log each number multiplied by 2.

let nums = [2,1,6,8];
let product =[];
 
nums.forEach(function(nums) {
    product.push(nums * 2)   
});
console.log({product});

//Write a function that takes in an array of numbers 
//and consoles the first four items multiplied by 8 
//and the last two added by 5. 
//Console the array with the new values
let numbers = [3,2,4,5,6,6];

function takesin(numbers) {
let multiple = [];
for (i = 0; i < numbers.length; i++){
    if(i < 4){
        multiple.push(numbers[i]*8)
    }else if (i >= numbers.length -2){
        multiple.push(numbers[i]+5)
    }}
console.log({multiple});
}takesin(numbers);

//Write a function that takes in the following array 
//and use a while loop to iterate
//and break when the item is equal to the fourth index
let arrNum = [1,2,3,4,5,6,7,8,9];

function whileloop(arrNum){
   let i = 0;
while (i < arrNum.length) {
    if (i === 4) {
        break;
    }
    console.log("arrNum:",arrNum[i]);
    i++;
}}whileloop(arrNum)

//Write a function that takes in a an array of strings 
//and use a continue statement when the item is at the second index
let fruits= ['apple','plum','banana','strawberries','kiwi']
// arrStrings(fruits)
function arrStrings(fruits) {
   
for (i = 0;i < fruits.length;i++){
    //console.log({fruits});
    if (i === 2) {
        continue;
    }
    console.log("fruits:",fruits[i]);
    // i++;
}}arrStrings(fruits)
