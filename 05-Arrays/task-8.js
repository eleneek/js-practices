const func = function(arr) {
    if(!(Array.isArray(arr))) {
        throw new Error('first parameter should be an Array');
    }

    let count = arr.length;
    let sum = 0;
    for (let i=0; i<count; i++) {
        if(typeof arr[i] !=='number' && !Array.isArray(arr[i])) {
            throw new Error('elements should be Array or Number');
        }

        while(Array.isArray(arr[i])) {
            arr = arr.flat()
        }
    }

    for (let k of arr) {
        sum+=k;
    }

    return sum
}

const arr = [[[1, 2], [1, 2]], [[2, 1], [1, 2]]];
console.log(func(arr));
