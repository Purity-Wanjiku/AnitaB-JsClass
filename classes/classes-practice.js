//customers- product,price,quantity
//Homepage- categories
//Veggies and Fruits
//Veggies-Kales,cabbages
//add to cart
//add an order
//Payment

//class Customer
//full names
//email address
//phone number
//password
//location

//class Product
//categories
//product name
//product quantity
//product price

//Add to cart
//product name
//product price 
//product quantity
//product price


//Payment
//payment methods


class Customer{
    constructor(fullnames,emailaddress, phonenumber,password,location){
    this.fullnames = fullnames
    this.emailaddress = emailaddress
    this.phonenumber = phonenumber
    this.password = password
}
       getFullNames(){
        return this.fullnames
       }

};
let user1 = new Customer("Purity ","wanjiku@gmail.com","2546726","456645!")
console.log(user1.getFullNames());

// class Product{
//     constructor()
// }





