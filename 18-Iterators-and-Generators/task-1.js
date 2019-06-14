class Customers {

    constructor() {
        this.costumersList = [];
    }
    add(user) {
        if ( !(typeof user === 'object')) {
            throw new Error('First parameter should  be  an Object.');
        }
        if (!(typeof user.name == 'string')) {
            throw new Error('Name is required.');
        }
        this.costumersList.push(user)
        return this.costumersList
    }
    [Symbol.iterator]() {
        let custuomersValidated = [];
        for(let i of this.costumersList) {
            if (i.verified === true) {
                custuomersValidated.push(i)
            }
        }
        let count = 0;

        return {
            next() {
                let done = count < custuomersValidated.length ? false:true;
                let customer = done ? void 0 : custuomersValidated[count++];
                return { value: customer, done }
            }
        }

    } 
}


const customers = new Customers();
customers.add({name: 'Alex'});
customers.add({name: 'Victor'});
customers.add({name: 'Marcus'});
customers.add({name: 'Andrii', verified: true});
customers.add({name: 'Marco', verified: true});
customers.add({name: 'Oliver'});
customers.add({name: 'Lisa', verified: true});
customers.add({name: 'John'});
customers.add({name: 'Ivan', verified: true});

for (const customer of customers) {
    console.log(customer);
}

// console log
// { name: 'Andrii', verified: true }
// { name: 'Marco', verified: true }
// { name: 'Lisa', verified: true }
// { name: 'Ivan', verified: true }