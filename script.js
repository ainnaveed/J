let student = {
    name : "Zain Naveed",
    degree : "BSIT",
    age : 22,
    university : "Government College University",
};
console.log(student);
console.log(typeof student);

let a = 50;
let b = 60;
console.log("a + b =", a + b);
console.log("a - b =", a - b);
console.log("a * b =", a * b);
console.log("a / b =", a / b);
console.log("a % b =", a % b);

// Array
// Natural Numbers

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr);

// Even  Numbers

let arr1 = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
console.log(arr1);

// Odd Numbers

let arr2 = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31];
console.log(arr2);

// Prime Numbers

let arr3 = [1, 3, 5, 7, 11, 17, 19, 23, 29, 31, 37, 41];
console.log(arr3);

// Array
let arr4 = ["Zain Naveed", "Abdullah Naveed", "Hamza Zia", "Talha Zia", "Asam Zafar", "Ibrahim Shahbaz", "Ismail Shahbaz", "Adam Shahbaz", "Aban Shahbaz", "Mukkram Javed", "Ibrahim Siddique"];
console.log(arr4);
console.log(typeof arr4);
console.log(arr4.length);
console.log(arr4[0]);
console.log(arr4[1]);
console.log(arr4[2]);
console.log(arr4[3]);
console.log(arr4[4]);
console.log(arr4[5]);
console.log(arr4[6]);
console.log(arr4[7]);
console.log(arr4[8]);
console.log(arr4[9]);
console.log(arr4[10]);

// Logical Operators

let c = 10;
let d = 11;

// Logical And
console.log("cond1 && cond2 =", c < d && c === 10);
console.log("cond1 && cond2 =", c > d && c === 10);

// Logical Or
console.log("cond1 || cond2 = ", c < d || c === 11);
console.log("cond1 || cond2 = ", c > d || c === 11);

// Logical And
console.log("!(c > d) =", !(c > d));
console.log("!(c < d) =", !(c < d));


// Conditional Statement

// Vote
// let age = 25;
// if (age >= 18){
//     console.log("You can vote");
// }
// else{
//     console.log("You cannot vote");
// }

// Modes

let mode = "Light";
let color;
if (mode === "Dark"){
    color = "Black"
}
else{
    color = "White"
}
console.log(color);

// Even and Odd Numbers
let num = 12;
if (num%2 === 0){
    console.log(num, "is even");
}
else{
    console.log(num, "is odd")
}

let modes = "Dark";
let colors;
if (modes === "Dark"){
    colors = "Black";
}
else if(modes === "Blue"){
    colors = "Blue";
}
else if(modes === "Pink"){
    colors = "Pink";
}
else{
    colors = "white";
}
console.log(colors);

// Age 0 to 100

let age = 25;
if (age <= 10){
    console.log("Child");
}
else if (10 <= 15){
    console.log("Tenager");
}
else if (15 <= 35){
    console.log("Young");
}
else if (35 <= 55){
    console.log("Middle Age");
}
else{
    console.log("Old Age");
}

// let name = prompt("Hello!");
// console.log(name);

// let number = prompt("Enter a Number:");
//     if (number % 5 ===0){
//         console.log(number, " is a multiple of 5");
//     }

// let score = 95;
// if (90 <= 100){
//     console.log("A");
// }
// else if (70 <= 89){
//     console.log("B");
// }
// else if (60 <= 69){
//     console.log("C");
// }
// else if (50 <= 59){
//     console.log("D");
// }
// else if (0 <= 49){
//     console.log("F")
// }
// else{
//     console.log("Not defined");
// }


let scores = 70;
let grade;
if (scores >= 90 && scores <= 100){
    grade = "A";
}
else if (scores >= 70 && scores <= 89){
    grade = "B";
}
else if (scores >= 60 && scores <= 69){
    grade = "C";
}
else if (scores >= 50 && scores <= 59){
    grade = "D";
}
else if (scores >= 0 && scores <= 49){
    grade = "F"
}
console.log("According to your score, your grade was ",grade);

// For Loops
for (let i = 1; i<=10; i++){
    console.log(i);
}
console.log("Loop has ended");

// Calculate a sum of 1 to 50

let sum = 0;
for (let i = 1; i <= 50; i++){
    sum = sum + i;
}
console.log("Sum =", sum);

// While Loops
// Even Numbers
let even = 2;
while (even <= 100) {
    console.log("Even Numbers = ", even);
    even = even + 2;
}

// Odd Numbers
let odd = 1;
while (odd <= 99){
    console.log("Odd Numbers = ", odd);
    odd = odd + 2;
}

// For-of Loop
let str = "ZainNaveed";
for(let string of str) {
  console.log("Name = ", string);
}

// Game
// let gameNum = 25;
// let userNum = prompt("Guess the game number: ");
// while (userNum != gameNum) {
//     userNum = prompt("You entered wrong number, Guess again:");
// }
// console.log("Congratulations, you entered the right number ");

// Strings

let str1 = "Zain Naveed";
console.log(str1);
console.log(str1.length);
let str2 = 'Abdullah Naveed';
console.log(str2);
console.log(str2.length);
let str3 = "Ibrahim Shahbaz";
console.log(str3);
console.log(str3.length);
let str4 = "Ismail Shahbaz";
console.log(str4);
console.log(str.length);
let str5 = "Adam Shahbaz";
console.log(str5);
console.log(str5.length);
let str6 = "Aban Shahbaz";
console.log(str6);
console.log(str6.length);
let str7 = "Hamza Zia";
console.log(str7);
console.log(str7.length);
let str8 = "Talha Zia";
console.log(str8);
console.log(str8.length);
let str9 = "Asam Zafar";
console.log(str9);
console.log(str9.length);
let str10 = "Ibrahim Siddique";
console.log(str10);
console.log(str10.length);
let str11 = "Mukkaram Javed";
console.log(str11);
console.log(str11.length);
let str12 = "Shafique Ahmad";
console.log(str12);
console.log(str12.length);
let str13 = "Shaheen Shah Afridi";
console.log(str13);
console.log(str13.length);
let str14 = "Mohammad Rizwan";
console.log(str14);
console.log(str14.length);
let str15 = "Haris Rauf";
console.log(str15);
console.log(str15.length);