let arr1 = [1, 2, -4, 3, -9, -1, 7];
let arr2 = [];
function f(arr) {
    for (let i of arr1) {
        if (i>0){
            arr2.push(i)
        }
    }
    console.log(arr2);
}
f(arr1);

function isPositive(num) {
    if (typeof num !== "number"){
        throw new Error('parameter type is not a Number')
    }
    else if (num >0) {
        console.log(true); 
    }
    else {
        console.log(false);
    }
}
isPositive('s')