let names = 'Rahul'
const vowels ='aeiouAEIOU'
let count = 0
for (let i = 0; i < names.length; i++)
{
    for( let v=0; v< vowels.length; v++)
    {
        names[i] == vowels[v] ? count += 1: count
    }
}
console.log(`No. of Vowels:${count}`);