let userInfo = ["Keyur Chanchad", 21, "Amreli", ["Male", 50000]];
let [name, age, city, [gender, salary]] = userInfo

// let userInfo = ["Keyur Chanchad", "Amreli"];
// let [name,  city, age = 18] = userInfo


console.log(userInfo);
console.log(name);
console.log(age);
console.log(city);
console.log(gender);
console.log(salary);

// let userDetails = ([name,  city, age])=> {
//     console.log(`Details: ${name}, ${city}, ${age}`);
// }
// userDetails(["Keyur Chanchad", 21, "Amreli"])

let user = ()=> ["Keyur Chanchad", 21, "Amreli"]

let [n, a, c] = user();
console.log(`Details: ${n}, ${c}, ${a}`);
