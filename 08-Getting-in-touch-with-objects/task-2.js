const person = {};
Object.defineProperties(person, {
    'rate' : {
        value: 0,
        writable: true,
        configurable: false,
        enumerable:false,

    },
    'salary' :{
        get () {
            let day = new Date().getDate();    
            let sum = day * person.rate;
    
            return sum
        },

        set (value) {
            throw new Error('You can\'t change salary');
        },

        
    }
});
person.rate = 6;

console.log(person.salary);
