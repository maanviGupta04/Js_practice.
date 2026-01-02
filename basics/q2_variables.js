const obj={
    name:"Maanvi",
    rollno:32
}

obj=44;
console.log(obj)

obj.rollno = 44;   // works (Mutation)
console.log(obj); 

// A const object cannot be reassigned to a new value (like a number).
// But you can change its internal properties.


let object={
    name:"Maanvi",
    rollno:32
}

object=44; // (Reassignment)
console.log(object)


// But let can overwritten 
