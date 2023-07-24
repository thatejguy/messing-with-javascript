/*const product = {
  name: 'socks',
  price: 1090
};

console.log(product);
console.log(product.name);
console.log(product.price);

product.name = 'cotton socks';

console.log(product.name);

product.newProperty = true;
console.log(product);

delete product.newProperty;
console.log(product);*/

/*
const product2 = {
  name: 'shirt',
  ['delivery-time']: '1 day',
  rating: {
    stars: 4.5,
    count: 87
  },
  fun: function function1() {
    for (let i = 0; i <= 5; i++) {
      console.log(i);
    }
  }
};

console.log(product2);
console.log(product2.name);
console.log(product2['name']);
console.log(product2['delivery-time']);

console.log(product2.rating.stars);
product2.fun();

console.log(typeof console.log);

const jsonString = JSON.stringify(product2);
console.log(JSON.parse(jsonString));
*/

console.log('hello'.length);
console.log('hello'.toUpperCase());

const object1 = {
  message: 'hello'
};
const object2 = object1;

object1.message = 'Good grease';
console.log(object1);
console.log(object2);

const object3 = {
  message: 'Good grease',
};

console.log(object3 === object1);
console.log(object2 === object1);

const object4 = {
  message: 'Good grease',
  price: 799
};
const {message, price} = object4;
console.log(message);
console.log(price);

const object5 = {
  //message: message
  message, 
  //method: function function1() {
  // console.log('method');
  //}
  method() {
    for (let i = 0; i <= 20; i++) {
      console.log(i);
    }
  },
  grease() {
    let my_array = [56, 79, 45, 34]
    my_array.forEach(item => {
      console.log(item);
    })
}}
console.log(object5);
object5.method();
object5.grease();

