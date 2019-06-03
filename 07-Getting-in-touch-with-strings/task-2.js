const checkSpam = function(source, example) {
    if (!(typeof source ==='string')) {
        throw new Error('first parameter should be String');
    }

    if (!(typeof example ==='string')) {
        throw new Error('second parameter should be String');
    }

    let source2 = source.toLowerCase();
    let example2 = source.toLowerCase();
    if (example2.includes(source2)) {
        return true 
    }

    else {
        return false
    }
}

console.log(checkSpam('pitterXXX@gmail.com', 'xxx'));
console.log(checkSpam('pitterxxx@gmail.com', 'XXX'));
