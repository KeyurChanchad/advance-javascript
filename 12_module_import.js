// import { name, fullName as fn, Calculator } from './12_module_export.js';
// import WishGreet from './12_module_export.js';
// //import { default as WishGreet } from './12_module_export.js';

// console.log(name);

// console.log(fn("keyur", "chanchad"));

// let c = new Calculator();
// console.log(c.sum(15, 60));

// WishGreet();

import * as Me from './12_module_export.js';
console.log(Me.name);

console.log(Me.fullName("keyur", "chanchad"));

let c = new Me.Calculator();
console.log(c.sum(15, 60));

Me.default();