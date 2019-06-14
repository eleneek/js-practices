class DB {
    constructor() {
        this.data = new Map();
    }

    validate(param,type,argument) {
        if ( typeof param !== type ) {
            throw new Error(`${argument} is required and must be ${type}`);
        }

        return this;
    }

    create(object) {
        let { name, age, country, salary } = person;
        this.validate(name, 'string', 'Name')
            .validate(age, 'number', 'Age')
            .validate(country, 'string', 'Country')
            .validate(salary, 'number', 'Salary');
        
        let objectId = '_' + Math.random().toString(36).substr(2, 9);
        this.data.set(objectId,object)
        return objectId
    };


    read(id) {
        if (!id || typeof id === "string") {
            let user = this.data.get(id);
            if (user) {
                return {...user,id}
            }

            else {
                return null;
            }
        }
        else if (arguments.length == 0) {
            throw new Error("You should pass an Argument");
        }

        else {
            throw new Error("Argument should be a String")
        }

    };


    readAll () {
        if ( arguments.length > 0) {
            throw new Error("Method does not take any arguments");
        }

        else {
            return  Array.from(this.data.values())
        }
    };

    update (id,object) {
        if (!id || typeof id !== "string") {
            throw new Error("Id should be a string!");
        }

        this.validate(object, 'object', 'Second parameter');


        let user = this.data.get(id);

        if (user) {
            this.data.set(id,{...user, ...object})
            return id;
        }

        else {
            throw new Error("User with this ID does not exist!");
        }
    };


    delete (id) {

        if(!id) {
            throw new Error("User with this ID does not exist!");
        }

        this.validate(id, 'string', 'First parameter');

        return this.data.delete(id)
    }
}

const db = new DB();

const person = {
    name: 'Pitter', // required field with type string
    age: 21, // required field with type number
    country: 'ge', // required field with type string
    salary: 500 // required field with type number
};

const id = db.create(person);
console.log(id);
const customer = db.read(id);
console.log(customer);
const customers = db.readAll(); // array of users
console.log(customers);
db.update(id, { age: 22 });// id
console.log(db.delete(id));// true


