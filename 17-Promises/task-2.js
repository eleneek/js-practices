const getCustomers = (customers, countries) => {
    
    const promise = new Promise((resolve, reject) => {
        filteredCustomers = customers.filter(customer => customer.verified)
        .map(customer=>{
            match = countries.find(country=>country.id === customer.id)
            if(!match)  {
                reject(`We don't have information about country`)
            }

            else {
                merged = {...customer, ...match} 
                return merged
            }
        })
        resolve(filteredCustomers)
    }) 

    return promise
} 

const customers = [
    {
        id: 'A1',
        name: 'Oliver',
        verified: true
    },
    {
        id: 'A2',
        name: 'alex'
    }
];

const countries = [
    {
        id: 'A1',
        country: 'usa'
    },
    {
        id: 'A2',   
        country: 'poland'
    }
];


getCustomers(customers, countries)
    .then((customers) => console.log(customers))
    .catch(error => console.log(error))