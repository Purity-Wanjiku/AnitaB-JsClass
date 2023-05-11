class Person{
    constructor(name,age,height){
        this.name;
        this.age;
        this.height;
    }
    greet(){
        console.log('Hello');
    }
};
let person1 = new Person("Henry",26,'7ft')
console.log(person1);


//iNERITANCE
class CrazyRobot extends Person{
     constructor (name, age, height,dominate){
        super(name,age,height);
        this.walk = true
        this.height = '7ft'
        this.dominate = dominate
     }
     world(){
        console.log(`I will ${this.dominate} the world`);
     }
}
let crazy = new CrazyRobot("Felix", 4 , "3ft","enslave")
crazy.world();

class LovingRobot extends CrazyRobot{
    constructor (name, age,height,dominance){
        super(name, age, height,dominance)
    }
}
let loving = new LovingRobot("Amanda",10,"5ft","love")
console.log({loving});