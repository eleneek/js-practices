var print = function f (arr,count=0) {
    if (! Array.isArray(arr)) {
        throw new Error('parameter type should be an array');
    }
    else if (arr.length ===0) {
        throw new Error('parameter can\'t be an empty');
    }
    else {
        if (count < arr.length) {
            console.log(arr[count]);
            return(f(arr,count+1))
        }
    }
}
console.log(print([1,2,3]));
