// // Class Introduction
// class Hello{
//     constructor(name,age){
//         this.username=name
//         this.userage=age
//         console.log('Constructor Called')
//     }
//     message(){
//         console.log("Hello "+ this.username,"Age:" ,this.userage)
//     }
// }

// const a= new Hello("Ahsan.",23);
// a.message();

// Class Inheritance

class uiit {
  // super class
  constructor(salary, dept, uni) {
    this.empsalary = salary;
    this.department = dept;
    this.university = uni;
  }
  info() {
    console.log(this.empsalary, this.department, this.university);
  }
}

class uaar extends uiit {
  info() {
    let extra = 10;
    let totalsalary = this.empsalary + extra;
    console.log(totalsalary, this.department, this.university);
  }
}

const obj1 = new uiit(10, "UIIT", "UAAR");
const obj2 = new uaar(10, "UIIT", "UAAR");

obj1.info();
obj2.info();
