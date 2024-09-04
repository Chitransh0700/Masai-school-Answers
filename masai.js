// Create a JavaScript program that performs various operations on an array of numbers. The program should include functionalities to add, remove, sort numbers and calculate the sum and average of the numbers in the array. Use array methods to achieve these tasks.
let numbers = [5, 3, 8, 1, 2];

function addNumber(array, number) {
    array.push(number);
}

function removeNumber(array, number) {
    const index = array.indexOf(number);
    if (index !== -1) {
        array.splice(index, 1);
    }
}

function sortNumbers(array) {
    return array.slice().sort((a, b) => a - b);
}

function calculateSum(array) {
    return array.reduce((sum, current) => sum + current, 0);
}

function calculateAverage(array) {
    return calculateSum(array) / array.length;
}

console.log("Initial array:", numbers);

addNumber(numbers, 4);
console.log("After adding 4:", numbers);

removeNumber(numbers, 3);
console.log("After removing 3:", numbers);

let sortedArray = sortNumbers(numbers);
console.log("Sorted array:", sortedArray);

let sum = calculateSum(numbers);
console.log("Sum of numbers:", sum);

let average = calculateAverage(numbers);
console.log("Average of numbers:", average);
