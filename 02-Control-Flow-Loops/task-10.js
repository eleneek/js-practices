var check = false;
var numbers = [12, 10, 15, 11, 14, 13, 16];
while (!check) {
    check = true;
    for (var i = 1; i < numbers.length; i ++) {
    if (numbers[i - 1] < numbers[i]) {
        check = false;
        var maximum = numbers[i - 1];
        numbers[i - 1] = numbers[i];
        numbers[i] = maximum;
    }
    }
}
console.log(numbers);
