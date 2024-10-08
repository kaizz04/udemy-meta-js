const uid = Symbol("uid");
console.log(uid);

const person = {
  id: "p1",
  name: "max",
  age: 30,
};

const company = {
  curEmployee: 0,
  employees: ["Max", "Nas"],
  next() {
    if (this.curEmployee >= this.employees.length) {
      return { vale: this.curEmployee, done: true };
    }

    const returnValue = {
      vale: this.employees[this.curEmployee],
      done: true,
    };
    this.curEmployee++;
    return returnValue;
  },
  getEmployee:function * employeeGenerator(){
    const currentEmployee = 0;
    while(currentEmployee < this.employees.length){
        yield(this.employees[currentEmployee]);
    }
  }
};

console.log(company.getEmployee().next());


