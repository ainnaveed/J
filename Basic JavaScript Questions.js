                            // Questions No 1
// Write a function that takes two numbers as parameters and returns their sum.

function sumNumbers(num1, num2) {
    return num1 + num2;
}
console.log(sumNumbers(5, 3)); 
console.log(sumNumbers(-10, 20));

                            // Questions No 2
// Create a function that takes an array of numbers as input and returns the largest number in the array.

function findLargestNumber(numbers) {
    let largest = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    }
    return largest;
}
const numberArray = [5, 10, 2, 8, 15];
console.log(findLargestNumber(numberArray));

                            // Question No 3
// Write a function that takes a string as input and returns the reverse of the string.

function reverseString(str) {
    return str.split('').reverse().join('');
}
const String = "hello";
console.log(reverseString(String));

                            // Question No 4
// Implement a function that checks whether a given number is even or odd.

function isEvenOrOdd(number) {
    if (number % 2 === 0) {
        return "even";
    } else {
        return "odd";
    }
}
console.log(isEvenOrOdd(4));
console.log(isEvenOrOdd(7));

                            // Question No 5
// Create a function that takes an array of strings and returns a new array with only the strings that have a length greater than 5.

function filterStringsByLength(arr) {
    return arr.filter(str => str.length > 5);
}
const stringsArray = ["apple", "banana", "orange", "watermelon", "grape"];
console.log(filterStringsByLength(stringsArray));

                            // Question No 6
// Write a function that calculates the factorial of a given number.

function factorial(number) 
{
    if (number === 0 || number === 1) {
        return 1;
    } 
else{
        return number * factorial(number - 1);
    }
}
console.log(factorial(10));
console.log(factorial(5));

                            // Question No 7
// Implement a function that takes two parameters, a base, and an exponent, and computes the base raised to the exponent.

function power(base, exponent) {
    return Math.pow(base, exponent);
}
console.log(power(2, 8));
console.log(power(5, 10));

                            // Question No 8
// Create a function that takes an array of numbers and returns the sum of all the numbers in the array.

function sumArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(sumArray(numbersArray));

                            // Question no 9
// Write a function that takes a string and removes all the vowels from it.

function removeVowels(str) {
    const vowelsRegex = /[aeiou]/gi;
    return str.replace(vowelsRegex, '');
}
const inputString = "Hello World";
console.log(removeVowels(inputString));

                            // Question No 10
// Implement a function that checks whether a given year is a leap year or not.

function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}
console.log(isLeapYear(2020));
console.log(isLeapYear(2021));

