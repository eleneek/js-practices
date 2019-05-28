function f (arr) {
    if (! Array.isArray(arr)) {
        throw new Error('parameter type should be an array');
    }
    else if (arr.length ===0) {
        throw new Error('parameter can\'t be an empty');
    }
    else {
        if (arr.length ===1) {
            return arr[0];
        }
        else {
            return f(arr[1:]);
        }
    }
}
f([1,2,3]);