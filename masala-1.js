let arr = [-5, 1, -1, 3, 5, 8, 9];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] < arr[j - 1]) {
      let a = arr[j]
      arr[j] = arr[j - 1] 
      arr[j - 1] = a
      console.log(arr[j-1]);
    }
  }
}

console.log(arr);