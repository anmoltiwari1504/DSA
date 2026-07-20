// Array Basics + Traversal + Largest/Smallest\



// Array - it is well defined collection of the same and different type of data , it is denoted by [] , and having a unique value which is called a index value and each element is seperated by (,).

//Problem 1 :  ----- Print all elements of an array.-------------

 //solution - 1

// function printArray(arr) {
//    for (let i = 0; i < arr.length ; i++){
   
//      console.log(arr[i])
// }

// }

// printArray([10, 20, 30, 40, 50])

//solution - 2  which time complexity is O(n) beacause we create a new arr which we does't  need

// function printArray(arr) {
//   let result = []
//   for (let i = 0; i < arr.length; i++){
//     result.push(arr[i])
//   }
//   console.log(result)
// }

// printArray([10,20,30])


//Problem 2:------------- Print an array in reverse.-------------

//solution - 1

// function reverseArray(arr) {
//   for (let i = 0; i < arr.length; i++){
//     arr.reverse()
//    console.log(arr[i])
//   }
// }
// reverseArray([10,20,30])

//solution - 2

// function reverseArray(arr) {
//     for (let i = arr.length -1 ; i >= 0 ; i--) {
//         console.log(arr[i]);
//     }
// }

// reverseArray([10, 20, 30, 40, 50]);



//Problem 3 :------------- Even Index Elements-------------

// function printEven(arr) {
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] % 2 === 0) {
//             console.log(arr[i])
       
//         }

//     }
// }
// printEven([10,20,4,2 ,5 , 40 , 20 ])


// problem -4  ------------- Odd Index Elements-------------


// function printOdd(arr) {
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] % 2 !== 0) [
//         console.log(arr[i])
//         ]

//     }

// }
// printOdd([2, 5, 24, 51, 5, 3, 2])


// problem - 5  ------------- Sum of Elements-------------
// function sumArray(arr) {
//     let sum = 0;

//     for (let i = 0; i < arr.length; i++){
//         sum  += arr[i]
//     }
//     return sum
// }
// console.log(sumArray([2,3,5,6]))


// problem -6  -------------Find the Largest Element-------------


// function findLargest(arr) {
//     let largest = arr[0];
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] > largest) {
//             largest = arr[i];
//         }
//     }
//     return largest
// }
// console.log(findLargest([1,2 , 4,6 ,2, 52 , 4]))


// problem - 7  -------------Find the Smallest Element-------------

// function findSmallest(arr) {
//     let smallest = arr[0];
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] < smallest) {
//             smallest = arr[i]
//         }
//     }
//     return smallest
// }
// console.log(findSmallest([2, 5,1,0,5]))


// problem - 7  ------------- Find the count of even numbers in an array -------------

// function evenCount(arr) {
//     let count = 0;
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] % 2 === 0) {
//           count++
//      }
//     }
//     return count

// }
// console.log(evenCount([20,40,54,755,2,645,2]))


// problem -8  ------------- Count Odd Numbers -------------

// function countOdd(arr) {
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 !== 0) {
//             count++
//         }
//     }
// return count
// }
// console.log(countOdd([2,677,2,62,62,77,3,]))