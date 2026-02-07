class Complex{
    constructor(real,imaginary){
        this.real=real 
        this.imaginary=imaginary 
    }
    
    add(other){
        
       return new Complex(

        this.real+other.real,
        this.imaginary+other.imaginary

       )
    }

    toString(){
        return `${this.real}+${this.imaginary}i`
    }

}

// let result=new Complex(55,66)
let c1=new Complex(55,66)
let c2=new Complex(44,55)
let result=c1.add(c2)
console.log(result.toString())
