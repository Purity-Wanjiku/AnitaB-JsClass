
//Create an array containing the names of all items in the inventory.
let inventory = ["grains","fruits","dairy","vegetables","meat"];
//Create a separate array with the corresponding stock quantities of each item.
let inventories = [100,12,20,20,200];



//Write a function to add a new item to the inventory, updating both arrays.
function stockTaking(items,stock) {
inventory.push(items);
inventories.push(stock);
}
stockTaking("condiments",240)
console.log(inventory);
console.log(inventories);
//or
let addItem = (newItem,newQuantity) => {
inventory.push(newItem);
inventories.push(newQuantity);
}

addItem("watermelon",67);
console.log(addItem);
//Write a function to update the stock quantity of an existing item.
function updateStock(thisItem,itsquantity) {
    let checkItem = inventory.indexOf(thisItem)
    console.log("thisitem-index",checkItem);
    if (checkItem > -1) {    //-1 says the item does not exist in the array
      let newquant = inventory[checkItem]  
    }
    // inventories[1] = 30
}
updateStock("dairy",30);
console.log(inventories); 

//Write a function to calculate the total number of items in the inventory.
function totalStock() {
    let add = 0;
    for (let i = 0; i < inventories.length; i++) {
        add += inventories[i] 
    }
    return add
}
// stockTaking("condiments",240);
console.log("totalstock",totalStock())

//or

function stockTotal() {
    let totals = inventories.reduce((a,b) => a+b)
    //reduce() is an iterative method  in ascending-index order accumulates them into a single value. 
    console.log({totals});
}
stockTotal();

//Write a function to find the item with the lowest stock quantity.
function checkSmallest() {
let smallestValue = 0;
for (let j = 0; j < inventories.length; j++) {
    if (inventories[j] < inventories[smallestValue]) {
        console.log({j});
        smallestValue = j;
        // console.log({smallestValue});
    }
    
}
// let get = inventory.indexOf[smallestValue]
return inventory[smallestValue]
} 
console.log("lowest",checkSmallest());




    
   
    











