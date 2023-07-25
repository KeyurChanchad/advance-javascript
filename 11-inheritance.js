class Employee {
    name
    age
    constructor(name, age){
        this.name = name;
        this.age = age;
        console.log(this.name, this.age);
    }

    info(){
        console.log(`Employee name is ${this.name} and age is ${this.age}`);
    }
}

class Manager extends Employee {
    salary
    constructor(name, age, salary){
        super(name,age);
        this.salary = salary
        console.log(this.salary);
    }

    // info(){
    //     console.log(`Manager name is ${this.name},
    //     age is ${this.age}
    //     and salary is ${this.salary}`);
    // }
}

let m = new Manager("keyur chanchad", 21, 50000);
m.info()