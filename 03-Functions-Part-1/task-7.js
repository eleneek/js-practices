function getDivisors(num) {
    let divisors = [];
    if (typeof num !== "number") {
        throw new Error('parameter type is not a Number');
    }
    else if (num <= 0) {
        throw new Error('parameter can\'t be a 0')
    }
    else {
        for (let i = 1; i <=num; i++) {
            if (num % i == 0) {
                divisors.push (i)
            }
        }
    }
    console.log(divisors);
}
getDivisors(10);