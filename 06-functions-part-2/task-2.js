const mix = (...parameters)=>{
    let answer;
    for (const i  of parameters){
        if (!(typeof i === "function")){
            throw new Error("Every parameter should be a Function");
        }
        if (i==0) {
            answer = i();
        }

        else {
            answer=i(answer);
        }
    } 

    return answer;

}

const answer = mix(() => {
    return 0;
}, (prev) => {
    return prev + 1;
}, (prev) => {
    return prev * 2;
}) // 2

console.log(answer);
