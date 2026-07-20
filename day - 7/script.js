//Array Searching + Reverse Array Concepts.

// Today we will cover:

// Linear Search
// Search an element in an array
// Return true or false
// Find the index of an element
// Count occurrences of an element
// Reverse an array properly
// Time & Space Complexity



// Linear search

//Problem 1-        Write a function that checks whether a target exists in an array.


// function searchElement(arr, target) {
//   for (let i = 0; i < arr.length; i++){
//     if (target === arr[i]) {
//       return true
//     }
//   }
//   return false

// }
// console.log(searchElement([10,20,30,40,50,60], 30))


//on the behalf of index value


///Problem 2 -        Find the Index

// function searchIndex(arr, target) {
//   for (let i = 0; i < arr.length; i++){
//     if (target === arr[i]) {
//       return i
//     }
//   }
//   return -1

// }
// console.log(searchElement([10,20,30,40,50,60], 30))


///Problem 3 -       Count how many times a target appears in an array.

// function selectCount(arr, target) {
//   let count = 0
//   for (let i = 0; i < arr.length; i++){
//   if (target === arr[i]) {
//     count++
//   }
// }
// return count
// }
// console.log(selectCount([10,20,30,20,30], 20))


//problem 4 -   Find the First Repeated Element

// function selectRepeated(arr, target) {
//   let repeated = 0;
//   for (let i = 0; i < arr.length; i++){

//     for (let j = i + 1; j < arr.length; j++){
//       if (arr[i] === arr[j])
//         return true
//     }
//   }
//   return false
// }
// console.log(selectRepeated([10,10,40,40,60],30))


//problem 5- find the duplicate code

// function findDuplicate(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] == arr[j]) {
//                 return arr[j];
//             }
//         }
//     }

//     return -1;
// }
// console.log(findDuplicate([10,20,30,40,10]))


//problem 6 - Find the First Non-Repeated Element

function findNonRepeated(arr) {
  for (let i = 0; i < arr.length; i++){
    let count = 0 
    for (let j = 0; j < arr.length; j++){
      if (arr[i] === arr[j]) {
        count++
       
      }
    }
    if (count === 1) {
       return arr[i]
     }
  
  }
  return -1
}

console.log(findNonRepeated([10,20,20,40,50,10]))