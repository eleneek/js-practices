class DB {
    constructor() {
        this.data = new Map();
    }

    create(object) {
        if (!object || typeof object === "object") {
            let objectId = '_' + Math.random().toString(36).substr(2, 9);
            this.data.set(objectId,object)
            return objectId
        }

        else {
            throw new Error("Parameter should be an object!")
        }
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

        if (!object || typeof object !== "object") {
            throw new Error("Second parameter should be an Object");
        }


        let user = this.data.get(id);

        if (user) {
            this.data.set(id,{...user, ...object})
            return id;
        }

        else {
            throw new Error("User with this ID does not exist!");
        }
    };


    delete () {

        if(!id || typeof id !== "string") {
            throw new Error("ID with type String is required");
        }

        else {
            return this.data.delete(id)

        }

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
console.log( db.update(id, { age: 22 }));// id
console.log(db.delete(id));// true

