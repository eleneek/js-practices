function f(num1,num2,num3){
    let answer = 0;
    if (typeof num1 === "number" && typeof num2 === "number" && typeof num3 === "number" ) {
        answer = (num1-num2)/num3;
        return answer;
        
    }
    else {
        throw new Error ('all parameters type should be a Number');
    }
}
console.log(f('s',9,3));
