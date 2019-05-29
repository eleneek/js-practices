function isPositive(num) {
    if (typeof num !== "number"){
        throw new Error('parameter type is not a Number')
    }
    else if (num >0) {
        return true; 
    }
    else {
        return false;
    }
}

let arr1 = [1, 2, -4, 3, -9, -1, 7];
let arr2 = [];

for (let i of arr1) {
    if(isPositive(i)) {
        arr2.push(i)
    }
}
console.log(arr2);
console.log(isPositive(-3));
console.log(isPositive(3));

