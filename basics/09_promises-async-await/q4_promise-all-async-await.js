function p1() {
  return new Promise(resolve => setTimeout(() => resolve("P1 done"), 1000));
}

function p2() {
  return new Promise(resolve => setTimeout(() => resolve("P2 done"), 2000));
}

function p3() {
  return new Promise(resolve => setTimeout(() => resolve("P3 done"), 3000));
}

async function allAtOnce() {
  const results = await Promise.all([p1(), p2(), p3()]);
  console.log(results);
}

allAtOnce();
