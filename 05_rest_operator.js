let sum = (name, ...args)=> {
    console.log(args);
    let sum = 0;
    for (let i in args) {
        sum += args[i]
    }
    console.log(sum);
}

// sum(20, 30)
// sum(20, 30, 15)
sum("Keyur", 20, 30)