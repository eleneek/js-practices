var Reduce = function(arr,func,acc) {
    if (!(Array.isArray(arr))) {
        throw new Error('first parameter should be an Array');
    }

    if (!(typeof func ==='function')) {
        throw new Error('second parameter should be a Function');
    }

    if (!(typeof acc ==='string' || typeof acc ==='number')) {
        throw new Error('third parameter should be a Number or a String');
    }
} 