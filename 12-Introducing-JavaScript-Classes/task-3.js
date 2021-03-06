class  Worker {
    constructor(name,surname,rate,days) {
        this._name = name;
        this._surname = surname;
        this._rate = rate;
        this._days = days;
    }

    getSalary () {
        return this._rate * this._days;
    }

    getName () {
        return this._name;
    }

    getSurname () {
        return this._surname;
    }

    getRate() {
        return this._rate
    }

    getDays() {
        return this._days
    }

    setRate(rate) {
        this._rate = rate;
    }
    setDays(days) {
        this._days = days;
    }
}

let worker = new Worker('John', 'Smith', 10, 31);
console.log(worker.getName()); // print 'John'
console.log(worker.getSurname()); // print 'Smith'
console.log(worker.getSalary());
worker.setRate(20); // increase rate
worker.setDays(10); // decrease days
console.log(worker.getSalary()); // print 200 - because 20*10