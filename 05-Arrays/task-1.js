const forEach = function(arr,func) {
    if (!Array.isArray(arr)) {
        throw new Error('first parameter should an Array');
    }

    if (!(typeof func === 'function')) {
        throw new Error('second parameter should be a Function');
    }

    let count = 0;
    let size = arr.length;
    for(count; count< size; count++) {
        func(arr[count], count, arr);
    }
}

let arr = [1,2,3];
forEach(arr, function(item,i,arr){
    console.log(`Index: ${i}, Item: ${item}, Array: ${arr}`);
    
})