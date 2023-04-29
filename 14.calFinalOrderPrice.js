let cartItems = [
  { quantity: 12, price: 40 },
  { quantity: 5, price: 250 },
  { quantity: 12, price: 40 },
  { quantity: 3, price: 408 },
  { quantity: 5, price: 700 },
];
finalOrderPrice = () => {
  for (const index in cartItems) {
    console.log(`${index}  ${cartItems[index].quantity}`);
  }
};
finalOrderPrice();
