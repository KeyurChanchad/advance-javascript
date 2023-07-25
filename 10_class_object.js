
class hello {
    message(){
        console.log("Message is sent now.");
    }

    soory(){
        console.log("Soory Everyone.");
    }
}

let h = new hello()
h.message()
h.soory()

class Student {
    name
    constructor(name){
        this.name = name
        console.log("I am constructor run automatic by ");
    }
    info(){
        console.log("Develop by " + this.name);
    }

    static staticMethod(){
        console.log("I'm static method run by class name only.");
    }
}

let s = new Student("Keyur Chanchad");
s.info();
Student.staticMethod()