// Arrays
let marks_of_12_class_students = [10, 20, 30, 40, 50, "Not Present"]
console.log(marks_of_12_class_students[0])
console.log(marks_of_12_class_students[1])
console.log(marks_of_12_class_students[2])
console.log(marks_of_12_class_students[3])
console.log(marks_of_12_class_students[4])
console.log(marks_of_12_class_students[5])
console.log(marks_of_12_class_students[6])
console.log("marks_of_12-class_students is ",marks_of_12_class_students.length)
// Changing Value
marks_of_12_class_students[6] = 60
marks_of_12_class_students[0] = 95
console.log(marks_of_12_class_students)

// Accessing Values
console.log(marks_of_12_class_students[3])
console.log(typeof marks_of_12_class_students[3])

// Typeof Array
console.log(typeof marks_of_12_class_students)

// Array Methods

// toString()
let num = [1, 2, 3, 4, 5];
let a = num.toString()
console.log(a);
console.log(typeof a)

//join()

//1
let naturalNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let b = naturalNumber.join("-")
console.log(b)
console.log(typeof b)

//2
let EvenNumber = [2, 4, 6, 8, 10]
let c = EvenNumber.join("-")
console.log(c)
console.log(typeof c)

//3
let primeNumber = [1, 3, 5, 7, 11, 13, 17, 19, 23, 31]
let d = primeNumber.join("-")
console.log(d)
console.log(typeof d)

//4
let oddNumber = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29]
let e = oddNumber.join("-")
console.log(e)
console.log(typeof e)

//5
let integerNumber = [+-1, +-2, +-3, +-4, +-5, +-6, +-7, +-8, +-9, +-10]
// let f = integerNumber.join("-")
console.log(integerNumber)
console.log(typeof integerNumber)

let integerNumber1 = [(+1, +2, +3, +4, +5, +6, +7, +8, +9, +10), (-1, -2 , -3, -4, -5, -6, -7, -8, -9, -10)]
console.log(integerNumber1)
console.log(typeof integerNumber1)