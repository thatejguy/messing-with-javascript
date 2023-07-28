//subscribe button
const subscribeButton = document.querySelector('.subscribebutton');

subscribeButton.addEventListener('click', () => {
  if (subscribeButton.textContent === 'Subscribe') {
    subscribeButton.textContent = 'Subscribed';
  } else {
    subscribeButton.textContent = 'Subscribe';
  }
});