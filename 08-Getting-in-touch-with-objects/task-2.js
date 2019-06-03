const person = {};
Object.defineProperties(person, {
    'rate' : {
        value: 0,
        writable: true,
        configurable: false,
        enumerable:false,

    },
    'salary' :{
        configurable: false,
        get () {
            let day = new Date().getDate();    
            let sum = day * person.rate;
    
            return sum
        }
    }
});

person.rate = 6;

console.log(person.salary);
