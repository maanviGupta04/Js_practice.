let p=Number(prompt("Enter the value for p"))
let r=Number(prompt("Enter the value for r"))
let t=Number(prompt("Enter the value for t"))

function simpleInterest(p, r, t) {
  return (p * r * t) / 100;
}

let si = simpleInterest(p,r,t);
console.log("Simple Interest =", si);
