let n = 8;
let k = 2;
let sum = 0;
let result = 1;

for (let i = 1; i <= k; i++) {
  result *= n
}

for (let i = 0; i <= k; i++) {
  result += n
}

console.log(result);