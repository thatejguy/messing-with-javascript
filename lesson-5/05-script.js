//muh values
let cartQuantity = 0;

//selectors
const showButton = document.querySelector('.showbutton');
const addButton = document.querySelector('.addbutton');
const buttonTwo = document.querySelector('.buttontwo');
const buttonThree = document.querySelector('.buttonthree');
const resetButton = document.querySelector('.resetbutton');

//click events
showButton.addEventListener('click', () => {
  console.log(`Cart Quantity: ${cartQuantity}`);
});
addButton.addEventListener('click', () => {
  cartQuantity += 1;
  console.log(`Cart Quantity: ${cartQuantity}`);
});
buttonTwo.addEventListener('click', () => {
  cartQuantity += 2;
  console.log(`Cart Quantity: ${cartQuantity}`);
});
buttonThree.addEventListener('click', () => {
  cartQuantity += 3;
  console.log(`Cart Quantity: ${cartQuantity}`);
});
resetButton.addEventListener('click', () => {
  cartQuantity = 0;
  console.clear();
  console.log('Cart was Reset.');
  console.log(`Cart Quantity: ${cartQuantity}`);
})


