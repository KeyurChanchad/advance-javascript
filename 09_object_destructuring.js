let userInfo = {
    name: "Keyur Chanchad", 
    age: 21,
    city: "Amreli"
}

//Variable name must be a key otherwise it will be undefined
let { name, age, city } = userInfo;

console.log(userInfo);
console.log(name);
console.log(age);
console.log(city);

let { name:n, age:a, city:c } = userInfo;
console.log(userInfo);
console.log(n);
console.log(a);
console.log(c);