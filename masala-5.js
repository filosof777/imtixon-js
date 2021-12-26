let array1 = [1,2,4,5,7,12];
let array2 = [];

let getPrimeNumbersAsArray = function(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 2 && array[i] % 2 === 1) {
      array2.push(array[i]);
    }
  }
  return console.log(array2);
} 

getPrimeNumbersAsArray(array1)