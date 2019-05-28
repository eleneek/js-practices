function f(numList){
    let sum = 0;
    for (let i of numList) {
        if (typeof i !=='number') {
            throw new Error ('all parameters type should be a Number');
        }

        else {
            sum+=i
        }
    }
    console.log(sum);
    
}
f([1,2,'s',4])