//subscribe button
function subscribe() {
  const subscribeButton = document.querySelector('.subscribebutton');

  subscribeButton.addEventListener('click', () => {
    if (subscribeButton.textContent === 'Subscribe') {
    subscribeButton.textContent = 'Subscribed';
    } else {
    subscribeButton.textContent = 'Subscribe';
    }
  });
}

subscribe();

//amazon calculator
const calculateButton = document.querySelector('.calculatebutton');
calculateButton.addEventListener('click', () => {
  calculateTotal();
});

function calculateTotal() {
  const inputElement = document.querySelector('.input');
  let cost = Number(inputElement.value);
  console.log(cost);
  console.log(typeof cost);

  if (cost < 40) {
    cost = cost + 10;
    console.log(cost);
  }

  document.querySelector('.js-total-cost')
    .innerHTML = `$${cost}`;
}

