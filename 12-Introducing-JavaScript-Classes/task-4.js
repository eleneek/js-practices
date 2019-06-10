class MyString {
    reverse(string)  {
        let splitString = string.split("");
        let reverseArray = splitString.reverse();
        let newString = reverseArray.join("")

        return newString
    }

    ucFirst(string) {
        const upperLetter =  string.charAt(0).toUpperCase()

        let upperString = upperLetter + string.slice(1);

        return upperString
    }

    ucWords(string) {
        let answer = "";
        let stringArray = string.split(' '); 
        for( let i = 0; i<stringArray.length; i++) {
            stringArray[i] = stringArray[i].charAt(0).toUpperCase() + stringArray[i].slice(1);        
            answer +=stringArray[i] + " ";
        }

        return answer
    }


}

let str = new MyString();

console.log(str.reverse('abcde')); // print 'edcba'
console.log(str.ucFirst('abcde')); // print 'Abcde'
console.log(str.ucWords('abcde abcde abcde')); // print 'Abcde Abcde Abcde'