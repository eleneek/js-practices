function f(num) {
    if (num >7 ||num<0) {
        throw new Error('parameter should be in the range of 1 to 7');
    }
    else if (typeof num !== "number") {
        throw new Error('parameter type is not a Number');
    }
    switch (num){
        case 1 :
           console.log('კვირა');
            break;
        case 2 :
            console.log('ორშაბათი');
                break;
        case 3 :
            console.log('სამშაბათი');
                break;
        case 4 :
            console.log('ოთხშაბათი');
                break;
        case 5 :
            console.log('ხუთშაბათი');
                break;
        case 6 :
            console.log('პარასკევი');
                break;
        case 7 :
            console.log('შაბათი');
                break;
    }
}
f(5);