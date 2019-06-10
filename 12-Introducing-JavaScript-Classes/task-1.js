class  Worker {
    constructor(name,surname,rate,days) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }

    get salary() {
        return this.getSalary;
    }

    getSalary () {
        return this.rate * this.days;
    }
}

let worker1 = new Worker('John', 'Smith', 10, 31);

console.log(worker1.name); // print 'John'
console.log(worker1.surname); // print 'Smith'
console.log(worker1.rate); // print 10
console.log(worker1.days); // print 31
console.log(worker1.getSalary()); // print 310 - because 10*31

let worker2 = new Worker('David', 'Smith', 5, 14);

console.log(worker2.name); 
console.log(worker2.surname); 
console.log(worker2.rate); 
console.log(worker2.days); 
console.log(worker2.getSalary()); 


let worker3 = new Worker('Jack', 'Smith', 15, 24);

console.log(worker3.name);
console.log(worker3.surname); 
console.log(worker3.rate); 
console.log(worker3.days); 
console.log(worker3.getSalary()); 