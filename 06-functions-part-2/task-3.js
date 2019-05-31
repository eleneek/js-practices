const mix = (...parameters) => {

    let error = { errors: [] };

    parameters.forEach((item,i) => {
        if ( !(typeof item === 'function' )){
            throw new Error('Each parameters must be function.');
        }
        try {
            if (i==0) {
                error.value = item();
            }
    
            else {
                error.value=item(error.value);
            }
        } catch (err) {
            error.errors.push({
                name: err.name,
                message: err.message,
                stack: err.stack,
                level: i
            });
        }

    });

    return error;
    
};

let error = mix(() => {
    return 0
}, (prev) => {
    return prev + 1;
}, (prev) => {
    throw new RangeError('Range is wrong');
}, (prev) => {
    return prev * 3;
});

console.log(error);