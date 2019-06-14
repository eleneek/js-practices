const  isCustomerVerified = (person) => {
    return new Promise((resolve,reject) => {
        if  (person.verified == true) { 
            resolve(true)
        }

        else {
            reject("Customer is not verified")
        }
    });
};

const personSecond = {
    name: 'Alex'
};

const personFirst = {
    name: 'Oliver',
    verified: true
};

isCustomerVerified(personFirst)
    .then(status => console.log(status)) // true
    .catch(error => console.log(error))
    
isCustomerVerified(personSecond)
    .then(status => console.log(status))
    .catch(error => console.log(error)) // Customer is not verified