const  truncate = function(string, maxlength) {
    if (!(typeof string === "string")) {
        throw new Error('First parameter should be a String');
    }
    if (!(typeof maxlength === "number")) {
        throw new Error('Second parameter should be a Number');
    }

    let size = string.length;
    if (size <= maxlength) {
        return string;
    }
    let extra = string.slice(0,maxlength-3) + '...' ;
    console.log(maxlength);
    return extra
}

console.log(truncate('I wanna to say next thing about this topic', 22));
