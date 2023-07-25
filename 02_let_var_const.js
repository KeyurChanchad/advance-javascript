// 1. Var
// 2. Let
// 3. Const

// 1. Var 
// It allow to redeclare and reasign variable
var x = "hello"
var x = "world"
x = "Wow!"
console.log(x);

//It has a globle scope
if (true) {
    var globle = "var is globly available"
    console.log(globle);
}
console.log(globle);

// 2. Let 
// It allow to reagin value of variable but doesn't allow to redeclare the variable
let y = "hello"
// let y = "world"
y = "world" 
console.log(y);

//It has a block scope
if (true) {
    let local = "let has local scope";
    console.log(local);
}
// console.log(local);  --> It gives error


// 3. Const 
// It doesn't allow to redeclare or reasign value of variable
const z = "This is const"
// const z = "redeclare it"
// z = 'reasign it'
console.log(z);

//It has block scope
if (true) {
    const block = "const has block scope"
    console.log(block);
}
// console.log(block); --> It gives error
