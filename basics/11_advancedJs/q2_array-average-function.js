
function average(value) {
  let sum = 0;
  for (let num of value) {
    sum += num;
  }
  return sum / value.length;
}

let arr = [10, 20, 30, 40];
console.log(average(arr));
