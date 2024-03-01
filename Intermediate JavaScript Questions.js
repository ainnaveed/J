                        // Question No 1
// Palindrome Checker: Write a function that checks whether a given string is a palindrome (reads the same forwards and backwards).

function isPalindrome(str) {
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}
console.log(isPalindrome("A man, a plan, a canal, Panama"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));

                        // Question No 2
// Reverse Words in a String: Create a function that takes a string as input and returns the same string with the order of words reversed.

function reverseWords(str) {
    const wordsArray = str.split(' ');
    const reversedWordsArray = wordsArray.reverse();
    const reversedString = reversedWordsArray.join(' ');
    return reversedString;
}
console.log(reverseWords("Hello World"));
console.log(reverseWords("The quick brown fox"));

                        // Question No 3
// FizzBuzz: Write a program that prints the numbers from 1 to n, but for multiples of 3, print "Fizz" instead of the number, and for multiples of 5, print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".

function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        }
        else if (i % 3 === 0) {
            console.log("Fizz");
        }
        else if (i % 5 === 0) {
            console.log("Buzz");
        }
        else {
            console.log(i);
        }
    }
}
fizzBuzz(15);

                            // Question No 4
// Anagram Checker: Create a function that checks whether two given strings are anagrams of each other (contain the same characters in a different order).

function areAnagrams(str1, str2) {
    const cleanStr1 = str1.replace(/[^A-Za-z]/g, '').toLowerCase();
    const cleanStr2 = str2.replace(/[^A-Za-z]/g, '').toLowerCase();
    if (cleanStr1.length !== cleanStr2.length) {
        return false;
    }
    const sortedStr1 = cleanStr1.split('').sort().join('');
    const sortedStr2 = cleanStr2.split('').sort().join('');
    return sortedStr1 === sortedStr2;
}
console.log(areAnagrams("listen", "silent"));
console.log(areAnagrams("hello", "world"));

                                // Question No 5
// Array Chunking: Write a function that splits an array into smaller arrays of a specified size.

function chunkArray(arr, size) {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
        chunks.push(arr.slice(i, i + size));
    }
    return chunks;
}
const arrayToChunk = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(chunkArray(arrayToChunk, 3));

                                // Question No 6
// Find the Missing Number: Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, write a function to find the one missing from the array.

function findMissingNumber(nums) {
    const n = nums.length + 1;
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = nums.reduce((sum, num) => sum + num, 0);
    return expectedSum - actualSum;
}
const numsArray = [0, 1, 2, 4, 5];
console.log(findMissingNumber(numsArray));

                                // Question No 7
// Remove Duplicates: Create a function that removes duplicate values from an array (preserving the original order).

function removeDuplicates(arr) {
    const uniqueValues = new Set();
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (!uniqueValues.has(arr[i])) {
            uniqueValues.add(arr[i]);
            result.push(arr[i]);
        }
    }
    return result;
}
const arrayWithDuplicates = [1, 2, 3, 3, 4, 2, 5, 6, 6];
console.log(removeDuplicates(arrayWithDuplicates));

                                // Question No 8
// Flatten Array: Write a function that flattens a nested array (i.e., converts a multi-dimensional array into a one-dimensional array).

function flattenArray(arr) {
    return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val), []);
}
const nestedArray = [1, [2, [3, 4], 5], 6];
console.log(flattenArray(nestedArray));

                                // Question No 9
// Rotating Array: Implement a function that rotates an array by k positions to the right.

function rotateArray(arr, k) {
    const rotationIndex = k % arr.length;
    const rotatedArray = arr.slice(-rotationIndex).concat(arr.slice(0, -rotationIndex));
    return rotatedArray;
}
const originalArray = [1, 2, 3, 4, 5];
const rotatedArray = rotateArray(originalArray, 2);
console.log(rotatedArray);

                            // Question No 10
// Valid Parentheses: Write a function to determine if a given string of parentheses is valid (i.e., every opening parenthesis has a corresponding closing parenthesis).

function isValidParentheses(str) {
    const stack = [];
    const pairs = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (pairs[char]) {
            stack.push(char);
        } else {
            const topElement = stack.pop();
            if (pairs[topElement] !== char) {
                return false;
            }
        }
    }
    return stack.length === 0;
}
console.log(isValidParentheses("()"));
console.log(isValidParentheses("()[]{}"));
console.log(isValidParentheses("(]"));
console.log(isValidParentheses("([)]"));
console.log(isValidParentheses("{[]}"));