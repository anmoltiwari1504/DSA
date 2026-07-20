// function largest(a, b) {
//   if (a == b) {
//     console.log('Both number are equal')
//   }
//   else if (a > b) {
//     console.log('A is largest number')
//   }
//   else {
//     console.log('B is the largest number')
//   }
  
// }

// (largest(20, 3))


// function findLargest(a, b) {
//   if (a === b) return 'Both are equal'
//   else if (a > b) return a
//   return b
// }
// console.log(findLargest(20, 20))


// function findLargest(a, b, c) {
//   if (a === b && b === c) return 'All are equal'
//   else if (a > b && a > c) return `a is the greates number : ${a}`
//   else if (b > a && b > c) return `b is the greates number : ${b}`
//   return `c is the greates number : ${c}`

// }
// console.log(findLargest(20,20,2))

// function findLargest(a, b, c) {
//   return  Math.max(a, b ,c)
// }
// console.log(findLargest(20,5,2))

// ----------------------------------- swap the number -----------------------------------

// function swap(a, b) {
//   a = a + b
//   b = a - b
//   a = a - b
//   return {a, b}
// }

// console.log(swap(5,10))


// function isEven(num) {
//   if (num % 2 === 0) return 'True'
//   return 'False'
// }
// console.log(isEven(5))


// function checkNumber(num) {
//   if (num > 0) return '+'
//   else if (num < 0) return '-'
//   return "0"
// }
// console.log(checkNumber(-2))

// function checkNumber(num) {
//   return Math.sign(num);
// }
// console.log(checkNumber(5))

// let sum = 0
// function sumNumber(num) {
//   for (let i = 0; i <= num; i++){
//     sum += i
//   }
//   return sum
// }
// console.log(sumNumber(4))


// let fractional = 1;
// function multiply(num) {
//   for (let i = 1; i <= num; i++){
//     fractional *= i;

//   }
//   return fractional
// }
// console.log(multiply(4))

// let count = 0

// function number(num) {
//   for (let i = 0; i < num; i++){
//     count = i
    
//   }
//   count++
//   return count


// }
// console.log(number(5))

// let num = 9
// for (let i = 1; i <= num; i++){
//   console.log(i)
// }

// let count = 0 
// function digit(num) {
//   while (num > 0) {
//     let digit = num % 10;
//     num = Math.floor(num / 10)
//     count++
//   }
  
//   return  count 
// }
// console.log(digit(4424))