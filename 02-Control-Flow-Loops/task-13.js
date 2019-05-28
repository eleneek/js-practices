var arr = [1,2,3,-2,-10,23,34];
var sum = 0;

for (let i of arr) {
    if (i > 0) {
        sum+=i
    }
}
console.log(sum);
