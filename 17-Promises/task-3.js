const get = require('fetch').fetchUrl;
const send = () => new Promise((resolve, reject) => {
    get(url, (error, meta, body) => {
        const { data } = JSON.parse(body);
        if (meta.status === 200) {
            resolve(data)
        }

        else {
            reject(`We have error, status code: ${meta.status}`)
        }
    });
});



const url = 'https://lab.lectrum.io/geo/api/countries?size=2';

send(url)
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });
