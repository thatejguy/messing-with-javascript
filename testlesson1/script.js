/*let randomNumber = Math.random();

let result = '';

let guess = 'heads';

if (randomNumber < 0.5) {
  result = 'heads';
} else {
  result = 'tails'
}

if (guess === 'heads') {
  console.log('You win!');
} else {
  console.log('You lose!');
}

console.log(result);*/

function calculateTax(cost, taxPercent = 0.1) {
  console.log(cost * taxPercent);
}

calculateTax(2000, 0.2);
calculateTax(5000);