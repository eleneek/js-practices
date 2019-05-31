const reverse = function(arr) {
    if(!(Array.isArray(arr))) {
        throw new Error('first paramenter should be an Array!');
    }

    if (arr.length ===0) {
        throw new Error('Array should not be empty');
    }

    let count = arr.length;
    let reversed = [];
    for(let i = count-1; i>=0; i--) {
        reversed.push(arr[i])
    }

    return reversed;
}
const arr = [3,2,1];
console.log(reverse(arr));
