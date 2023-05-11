let a = 20  //global variable - accessed everywhere
 function add(b) {
    console.log(a+b);
    a = 70
    let c = 30
    console.log(a+b+c);  //local variable - accessible to the defined skop
 }
  add(20)
  console.log(a);

  //Local variable can only run within its boundaries

  function greet() {
    let hello = "Hey,";   //It is local to greet function
    function talk(){
        let greeting = "hello there"
        console.log(`${hello} ${greeting}`);  //hello variable becomes a global variable to talk but local to greet function
        //can access variable Hello within talk function
        }
        talk()
    }
  greet()






