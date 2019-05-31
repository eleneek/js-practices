const print = function f (arr) {
    if (! Array.isArray(arr)) {
        throw new Error('parameter type should be an array');
    }
    else if (arr.length ===0) {
        throw new Error('parameter can\'t be an empty');
    }

    const func = function(arr) {
        if(arr.length > 0) {
            console.log(arr[0]);
            func(arr.splice(1))
            
        }
    } 
    func(arr);
}
print([1,2,3]);
