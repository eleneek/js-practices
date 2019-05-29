function f(num) {
    if (typeof num === "number") {
        return Math.pow(num,3);
        
    }
    else {
        throw new Error ('parameter type is not a Number');
    }
}

console.log(f(2));
