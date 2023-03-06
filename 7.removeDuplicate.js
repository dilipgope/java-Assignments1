let cartItems = ['Apple', 'Mango', 'Rice','Dal', 'Dal', 'Orange','Apple']
let sortedItems = []
for (i=0; i < cartItems.length; i++)
{
    sortedItems.indexOf(cartItems[i]) === -1 ? sortedItems.push (cartItems[i]) : sortedItems
    
}
console.log(sortedItems);