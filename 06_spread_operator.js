let arr1 = [10, 20, 30];

// let arr2 = arr1      //This will copy the value of arr1 in arr2
let arr2 = [...arr1]
arr1.push(40);

// let arr3 = arr1.concat(arr2);
let arr3 = [150, ...arr1, 200,  ...arr2, 90]

console.log(arr1);
console.log(arr2);
console.log(arr3);

let obj1 = {
    name: "Keyur"
}
let obj2 = {
    age: 21
}

let obj3 = {
    ...obj1,
    ...obj2,
    developer: "Full stack"
}

console.log(obj1);
console.log(obj2);
console.log(obj3);
