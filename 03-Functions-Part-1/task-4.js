function f(num) {
    if (num >7 ||num<0) {
        throw new Error('parameter should be in the range of 1 to 7');
    }
    else if (typeof num !== "number") {
        throw new Error('parameter type is not a Number');
    }
    switch (num){
        case 1 :
           return'კვირა';
            break;
        case 2 :
            return 'ორშაბათი';
                break;
        case 3 :
            return 'სამშაბათი';
                break;
        case 4 :
            return 'ოთხშაბათი';
                break;
        case 5 :
            return 'ხუთშაბათი';
                break;
        case 6 :
            return 'პარასკევი';
                break;
        case 7 :
            return 'შაბათი';
                break;
    }
}
console.log( f(2));