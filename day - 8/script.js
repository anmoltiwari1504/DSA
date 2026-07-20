// Today we will cover:

// Reverse an array in-place
// Swap two elements
// Two Pointer concept
// Reverse array using two pointers
// Move zeroes to the end
// Basic time and space analysis


// ---------------------Swap Two Values---------------------

// function swap(a, b) {
//   let temp = b
//   b = a
//   a = temp
//   return {
//     a ,b
//   }
// }
// console.log(swap(2,6));


// --------------------- Two Pointers swap---------------------


// function reverseArr(arr) {
//   let left = 0
//   let right = arr.length - 1;
  
//   while(left < right ){
//     let temp = arr[left];
//     arr[left] = arr[right];
//     arr[right] = temp;
//     left++
//     right --
//   }
//   return arr
// }
// console.log(reverseArr([10,5,30,40,50]))


//---------------------Move Zeroes to the End---------------------

// function moveZeros(arr) {
//   let left = 0

//   for (let i = 0; i < arr.length; i++){
//     if (arr[i] !== 0) {
//     let temp = arr[i];
//     arr[i] = arr[left];
//     arr[left] = temp;
//       left ++

//     }
//   }
//   return arr
// }
// console.log(moveZeros([10,20,0,30,50,0,0]))


//    ----------------Reverse Only the Array Using Two Pointers---------------------

// function reverseArr(arr) {
//   let left = 0
//   let right = arr.length - 1
//   while (left < right) {
//     let temp = arr[left]
//     arr[left] = arr[right]
//     arr[right] = temp
//     left++
//     right--
//   }
//   return arr
// }
// console.log(reverseArr([10,20,30,40,50]))