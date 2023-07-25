// export var name = "Keyur";

// export let fullName = (fname, lname) => {
//     return `${fname} ${lname}`;
// }

// export class Calculator {
//     num1 = 0
//     num2 = 0
//     sum(n1, n2){
//         return n1 + n2
//     }
// }

let name = "Keyur";

let fullName = (fname, lname) => {
    return `${fname} ${lname}`;
}

class Calculator {
    num1 = 0
    num2 = 0
    sum(n1, n2){
        return n1 + n2
    }
}

export default function(){
    console.log("Good morning");
}

// export default greet 

export { name, fullName, Calculator}