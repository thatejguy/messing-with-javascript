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
  console.log(inputElement.value);
}

