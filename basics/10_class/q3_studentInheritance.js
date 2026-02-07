
class Human{

    constructor(namee){
        this.name= namee
    }
   
    speaks(){
        console.log("Humans can speak")
    }

    eats(){
        console.log("Humans can eat on there own")
    }
}

class Student extends Human{
    constructor(namee,age){
        super(namee)
        this.age=age
    }
    eats(){
        super.eats();  
        console.log("bunny can eat on there own")
      

    }
    }
let newhu=new Human("Sunny")
let age=new Student("Bunny",23)
console.log(age.eats())
