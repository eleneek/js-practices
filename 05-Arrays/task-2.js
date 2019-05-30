var Filter = function(arr,func) {
    if (!Array.isArray(arr)) {
        throw new Error('first parameter should be an Array');
    }

    if (!(typeof func === 'function')) {
        throw new Error('second parameter should be a Function');
    }

    let count = 0;
    let size = arr.length;
    let answer = []
    for(count; count<size;count++) {

        if (func(arr[count],count,arr)) {
            answer.push(arr[count])
        }
    }
    return answer;
}

let arr = [1,2,-3,4,-5]

let answer = Filter(arr,function(item, i, arr){
    return item < 0;
})

console.log(answer);


