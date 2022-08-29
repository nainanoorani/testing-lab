module.exports = {
    returnTwo: () => {
        return 2;
    },

    greeting: (name) => {
        let stringToReturn = 'Hello, ' + name+ '.';
        return stringToReturn;
    },

    add: (num1, num2) => {
        return num1+num2;
    }

}