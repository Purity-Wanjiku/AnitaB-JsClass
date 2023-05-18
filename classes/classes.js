//new keyword lets you create an instance of an object from a constructor
class Person{
    constructor(name,age,height){
        this.name = name;
        this.age = age;
        this.height = height;
    }
    greet(){
        console.log('Hello');
    }
};
let person1 = new Person("Henry",26,'7ft')
console.log(person1);


//INHERITANCE
class CrazyRobot extends Person{
     constructor (name, age, height,dominate,walk){
// call the super class constructor and pass in the parent's parameter.
//Super refers to the parent class’s constructor }
        super(name,age,height);              
        this.walk = walk
        this.height = '7ft'
        this.dominate = dominate
     }
     world(){
        console.log(`I will ${this.dominate} the world`);
     }
}
let crazy = new CrazyRobot("Felix", 4 , "3ft","enslave",true)
crazy.material="metal"
crazy.world();
console.log(crazy);
crazy.greet()

class LovingRobot extends CrazyRobot{
    constructor (name, age,height,dominate,walk,run){
        super(name,age,height,dominate,walk)
        this.name = name
        this.age = age
        this.height = height
        this.dominate = dominate
        this.walk = walk
        this.run = run
    }
}
let loving = new LovingRobot("Amanda",30,5.5,"enslave",true,false)
console.log({loving});