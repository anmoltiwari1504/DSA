//  GCD-The GDD is two number is the largest number thats divides both exactly.

// function findGcd(a, b) {
//   let gcd = 1;
//   let smaller;
//   if (a < b) {
//    smaller = a
//   }
//   if (b < a) {
//   smaller = b
//   }
//   for (let i = 1; i <= smaller; i++){
//     if (a % i === 0 && b % i === 0) {
//       gcd = i
//     }
//   }
//   return gcd
// }
// console.log(findGcd(12, 7))


// lCM - The smallest positve number that a multiple of both number

// function findLcm(a, b) {
//   let gcd = 0;
//   let smallest;
//   if (a < b) {
//     smallest = a;
//   }
//   else {
//     smallest = b
//   }
//   for (let i = 1; i <= smallest; i++){
//     if (a % i === 0 && b % i === 0) {
//       gcd = i
//     }
//   }
//   let lcm = (a * b) / gcd
//   return lcm
// }
// console.log(findLcm(8, 12))


function findGcd(a, b) {
while (b !== 0) {
  let reminder = a % b
  a = b 
  b = reminder

  }
  return a 
}
console.log(findGcd(20, 8 ))