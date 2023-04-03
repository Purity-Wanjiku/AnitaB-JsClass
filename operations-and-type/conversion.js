let a = "10";
//implicit conversion/coersion
let b = a * 10;
console.log(b);
console.log(typeof(b));
console.log(a * 2);
console.log(typeof(a* 2));
console.log(typeof(+a));
console.log(+a);
//explicit
//use js methods
let c = Number (a);
console.log("c",typeof(c));
let d = String(c);
console.log("d",typeof(d)); 
let e = new Array(d);
console.log(e);
let f = "45";
console.log(parseFloat(f));
