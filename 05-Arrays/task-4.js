var Every = function(arr,func) {
    if (!Array.isArray(arr)) {
        throw new Error('first parameter should be an Array');
    }

    if (!(typeof func === 'function')) {
        throw new Error('second parameter should be a Function');
    }

    let count = 0;
    let size = arr.length;

    for (count; count<size; count++) {
        if (func(arr[count],count,arr)) {
            return true;
        }
        else {
            return false;
        }

    }
}

let arr = [1,1,1]

let final = Every(arr,function(item,i,arr) {
    return item % 2 === 0;
})

console.log(final);
