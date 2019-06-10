class Validator {
    isEmail(string) {

        if (string.includes("@")) {
            let secondHalf = string.split("@") [1]
            if (this.isDomain(secondHalf)) {
                return true;
            }
        }
        else {
            return false
        }
        

    }

    isDomain(string) {
        if ( string.split(".").length ==2) {
            return true
        }

        else {
            return false
        }
    }

    isDate(string) {

        let dateArray = string.split(".");
        let day = dateArray[0];
        let month = dateArray[1];
        let year = dateArray[2];

        if (day > 1 && day <=31  && month > 1 && month<=12 && year > 1) {
            return true
        }

        else {
            return false
        }
        
    }

    isPhone(string) {
        let phoneArray = string.split(" ");
        let id = phoneArray[0]
        let countryCode = phoneArray[1]
        let number = phoneArray[2]

        if (phoneArray.length == 3 && id.charAt(0) == "+" && countryCode.charAt(0) == "(" && countryCode.slice(-1) == ")" && number.split("-").length != 0 ) {
            return true
        }

        else {
            return false
        }
       
        
    }
}

let validator = new Validator();
console.log(validator.isDomain('jshtml.net'));
console.log(validator.isEmail('jshtml@mail.ru'));
console.log(validator.isDate('12.05.2020'));
console.log(validator.isPhone('+375 (29) 817-68-92'));