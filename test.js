var obj = [
   
    { quantity: 12, price: 40 },
  { quantity: 5, price: 250 },
  { quantity: 12, price: 40 },
  { quantity: 3, price: 408 },
  { quantity: 5, price: 700 },
];
 
for (const value in (obj)) {
    console.log(obj[value]);
}