const compose = (...parameters) => (func) => {
    let count = parameters.length -1;
    let reversed = parameters.reverse();
    for (let i = 0; i<= count; i++){
        func = reversed[i](func)
        
    }
    return func
}
console.log(compose((str) => {
    return str + 'c';
}, (str) => {
    return str + 'b';
})('a'))