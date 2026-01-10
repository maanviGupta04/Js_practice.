let obj = {
    "Maanvi": 98,
    "Riya": 70,
    "Bhoomi": 73
};

//for loop
let keys = Object.keys(obj);
for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    console.log(key + ":" + obj[key]);
}
//for in loop
for (let key in obj) {
    console.log(key + ":" + obj[key]);
}

//for of loop
for (let [key, value] of Object.entries(obj)) {
    console.log(key + ":" + value);
}

//forEach loop
Object.keys(obj).forEach(key => {
    console.log(key + ":" + obj[key]);
});

//forEach using Destructuring
Object.entries(obj).forEach(([key, value]) => {
    console.log(key + ":" + value);
});
