let array1 = [1,2,4,5,7,12];
let array2 = [];
let count = 0;

// let getPrimeNumbersAsArray = function() {
//   for (let i = 0; i < 100; i++) {
//     if (i > 2 && i % 2 === 1) {
//       count++
//       console.log(count);
//     }
//   }
// } 

// getPrimeNumbersAsArray(array1)

// for (let i = 2; i < 100; i++) {
//   for (let j = 2; j < 100; j++) {
//     if (i % j === 1) {
//       count++
//       console.log(count);
//     }
//   }
// }

// for (let i = 2; i < 100; i++) {
//   if (i % i !== 0) {
//     console.log(`${i} % 2 == 1`);
//     // console.log(count++);
//   }
// }

// console.log(11 % 2 == 1);

function isPrime(num) {
  for(var i = 2; i < num; i++)
    if(num % i === 1) {
      count++
      console.log(`${num} + ${i} == 0`);
    };
  return count;
}

console.log(isPrime(32));