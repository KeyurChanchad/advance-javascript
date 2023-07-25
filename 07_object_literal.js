let name = "Keyur Chanchad"
let course = "Master in computer science"
let a = "student"

let obj = {
    name,
    course,
    [a + "age"]: 21,
    getCouse(){
        return this.course
    },
    'return getAge'(){
        return  this.studentage
    }
}


console.log(obj);
console.log(obj.getCouse());
console.log(obj['return getAge']());