function wait(n){
    return new Promise(resolve=>{
        setTimeout(() => {
            resolve(`Resolve after ${n} seconds`)
        }, n *1000);
    })
}

(async ()=>{
        console.log(await wait(1))
        console.log(await wait(2))
        console.log(await wait(3))
        console.log(await wait(4))
    
})();
