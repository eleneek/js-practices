const extractCurrencyValue = function(source) {
    if (!(typeof source === 'string')) {
        throw new Error('parameter should be a String');
    }

    let number = Number(source.slice(1));  
    return number;
}

console.log(extractCurrencyValue('$120'));
