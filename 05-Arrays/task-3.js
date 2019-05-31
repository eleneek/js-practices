const Every = function(arr,func) {
    if (!Array.isArray(arr)) {
        throw new Error('first parameter should be an Array');
    }

    if (!(typeof func === 'function')) {
        throw new Error('second parameter should be a Function');
    }

    let count = 0;
    let size = arr.length;
    let check = false;

    for (count; count<size; count++) {
        check = func(arr[count],count,arr)

        if (!check) {
            break;
        }
    }

    return check;
}

let arr = [2,4,6]

let final = Every(arr,function(item,i,arr) {
    return item % 2 === 0;
})

console.log(final);
