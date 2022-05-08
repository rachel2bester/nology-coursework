function isNumberPositive(number) {
    if (number > 0) {
        return true;
    } else {
        return false;
    }
}

function convertDaysToAge (days) {
    let years = Math.floor(days/365);
    return years;
}

function getLargestNumber(num1, num2, num3) {
    let largestNum = num1;
    if (largestNum < num2) {
        largestNum = num2;
    }
    if (largestNum < num3) {
        largestNum = num3;
    }
    return largestNum;
}

function getLastName(names) {
    let lastName = names[names.length - 1]
    return lastName;
}

console.log(isNumberPositive(-1));
console.log(isNumberPositive(5));

console.log(convertDaysToAge(3650));
console.log(convertDaysToAge(6570));

console.log(getLargestNumber(2, 1, 4));
console.log(getLargestNumber(6, 2, 3));
console.log(getLargestNumber(6, 8, 3));

console.log(getLastName(["Charlie", "Rob", "Andy"]));
console.log(getLastName(["Ash","Stu"]));