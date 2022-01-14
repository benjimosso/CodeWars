var numbers = [1, 22, 13, 45, 5, 68, 7, 98];

var sorted = numbers.slice().sort(function (a, b) {
  return a - b
})

const smallest = sorted[0];
const largest = sorted[sorted.length - 1];


const chico = Math.min(...numbers)
const max = Math.max(...numbers)

console.log(chico, max, 'Esta Linea')

return [smallest, largest]

// Better and cleaner solutions

function minMax(arr){
  return [Math.min(...arr), Math.max(...arr)];
}

