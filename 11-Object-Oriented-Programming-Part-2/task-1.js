Object.prototype.delay = function(ms) {
    return (...funcs) => setTimeout(() => {
        this(...funcs)
    }, ms)
}

function f() {
    console.log('hello');
}
f.delay(1000)(); 
function f2(a, b) {
console.log(a + b);
}
f2.delay(1000)(1, 2); 

