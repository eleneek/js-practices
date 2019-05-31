const arrayFill = function(fill,num) {
    if (!(typeof fill ==='string' || typeof fill ==='number' || typeof fill ==='object')) {
        throw new Error('first parameter should be a String,Number or an Array');
    }

    if (!(typeof num ==='number')) {
        throw new Error('second parameter should be a Number');
    }

    let filled = []

    for( let i=0; i<num; i++) {
        filled.push(fill)
    }

    return filled;
}
console.log(arrayFill('x',5));

