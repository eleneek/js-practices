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
            this.data.set(id, {...user, ...object})

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


    find(query) {
        if (!query || typeof query !== 'object') {
            throw new Error("Query should be an Object!")
        }

        else {
            let members = this.readAll()
            let results =  members.filter(user => {
                let filteredInfo = []
                for (let key of Object.keys({ ...query })) {
                    if (key == "name" || key == "country") {
                        filteredInfo.push(query[key] == user[key])
                    }
                    if (key == "age" || key == "salary")  {
                        let { min, max } = query[key]
                        if(min) filteredInfo.push(user[key] > min)
                        if(max) filteredInfo.push(user[key] < max)
                        if(!min && !max) throw new Error("Query should contain  min or max!!")
                    }
                }
                return filteredInfo.every(match=>match)
            })
            return results
    
        }   
       
    }
}

const db = new DB();
db.create({
    country: 'ua',
    age: 25,
    salary: 500
})
const query = {
    country: 'ua',
    age: {
        min: 21
    },
    salary: {
        min: 300,
        max: 600
    }
};
const customers = db.find(query); // array of users
console.log(customers)


