function f(numbers){
    let sum = 0;
    for (let i of arguments) {
        if (typeof i !=='number') {
            throw new Error ('all parameters type should be a Number');
        }

        else {
            sum+=i
        }
    }
    return sum;
    
}

console.log(f(1,2,3,4));
