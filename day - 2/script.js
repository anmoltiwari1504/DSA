// DAY - 2 OF DSA ZERO TO ADVANCED

//  problem  - Reverse a number

// function reverseNumber(num) {
//   let reverse = 0
//   while (num > 0) {
//     let digit = num % 10
//     reverse = reverse * 10 + digit
//     num = Math.floor(num / 10 )
//   }
//   return reverse
// }
// console.log(reverseNumber(1234))

// Sum of digit

// function sum(num) {
//   let sum = 0
// while (num > 0) {
//     let digit = num % 10
//   sum += digit;
//   num = Math.floor(num / 10)
// }
// return sum
// }

// Palindrome Number

// function checkPalindrome(num) {
//   let reverse = 0
//   let originalNumber = num

//   while (num > 0) {
//     let digit = num % 10;
//    reverse = reverse * 10 + digit
//   num = Math.floor(num / 10 )
//   }
//   if (originalNumber === reverse)  return originalNumber === reverse
//   else  return false
  
// }
// console.log(checkPalindrome(121))


//Prime Number

  // function isPrime(num) {
  //   for (let i = 2; i < num - 1; i++){
  //     if (num <= 1) return false;
  //     if (num % i == 0 ) return false 
     
  //   }
  //   return true

  // }
  // console.log(isPrime(7))
  
  //Armstrong number 
  
function Armstrong(num) {
    while (num > 0) {
    let digit = num % 10;
   let armstrong = armstrong * armstrong + digit;
    num = Math.floor(num / 10)
  }
  if (armstrong === num) return true 
  else return false 
  
}
console.log(Armstrong(153))
