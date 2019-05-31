const Reduce = function(arr,func,acc) {
    if (!(Array.isArray(arr))) {
        throw new Error('first parameter should be an Array');
    }

    if (!(typeof func ==='function')) {
        throw new Error('second parameter should be a Function');
    }

    if (!(typeof acc ==='string' || typeof acc ==='number')) {
        throw new Error('third parameter should be a Number or a String');
    }

    let count = 0;
    let size = arr.length;
    let sum = acc
    let reversed = arr.reverse()
    for (count;count<size; count++) {
        sum = func(sum, reversed[count],count,arr)
    }

    return sum
} 

let arr = ['a','b','c'];

let result = Reduce(arr,function(acc,item,i,arr){
    return acc + item;
},0)

console.log(result);