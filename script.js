// Understanding Data Types in JavaScript

// Task 1: Declare variables for student information
let studentName;
let studentAge;
let studentGrade;
let isPresent;

// Task 2: Assign sample values
studentName = "Alice";
studentAge = 15;
studentGrade = 10;
isPresent = true;

// Task 3: Display student information
console.log("\n--- Student Information ---");
console.log("Name:", studentName);
console.log("Age:", studentAge);
console.log("Grade:", studentGrade);
console.log("Present:", isPresent);

// Exploring JavaScript Operators

// Task 1: Declare variables for arithmetic operations
let num1;
let num2;

// Task 2: Assign sample values
num1 = 10;
num2 = 5;

// Task 3: Perform arithmetic operations
console.log("\n--- Arithmetic Operations ---");
console.log("Sum:", num1 + num2);
console.log("Difference:", num1 - num2);
console.log("Product:", num1 * num2);
console.log("Quotient:", num1 / num2);

// Task 4: Explore assignment operators
console.log("\n--- Assignment Operators ---");
num1 += 5;  // Add 5 to num1
console.log("Updated num1:", num1);
num2 *= 2;  // Multiply num2 by 2
console.log("Updated num2:", num2);

// Task 5: Use comparison operators
console.log("\n--- Comparison Operators ---");
console.log("Is num1 equal to num2?", num1 === num2);
console.log("Is num1 greater than num2?", num1 > num2);
console.log("Is num1 not equal to num2?", num1 !== num2);

// Task 6: Apply logical operators
console.log("\n--- Logical Operators ---");
let isPositive = num1 > 0 && num2 > 0;
let isEven = num1 % 2 === 0 || num2 % 2 === 0;
console.log("Are both numbers positive?", isPositive);
console.log("Is at least one number even?", isEven);
