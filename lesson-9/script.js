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
