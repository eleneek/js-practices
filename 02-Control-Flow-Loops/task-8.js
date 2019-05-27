var arr = [1,2,3,4];
var sum =  0;
for (let i of arr) {
    if (i %2 ==0 && i >3) {
        sum+=i
    }
}
console.log(sum)