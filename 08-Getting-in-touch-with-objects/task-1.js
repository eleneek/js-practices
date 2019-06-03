const person = {
    get salary() {
        date = new Date();
        let daysLeft =  new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate() - date.getDate();

        if (daysLeft >20) {
            return 'Good Salary'
        }

        else {
            return 'Bad Salary'
        }
    },
};

console.log(person.salary);
