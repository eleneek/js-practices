function f(num) {
    if (typeof num === "number") {
        console.log(Math.pow(num,3));
        
    }
    else {
        throw new Error ('parameter type is not a Number');
    }
}

f('content');