let arr =[1,3,4,6,9,12,13,15,16]
for (i=0; i<arr.length; i++)
    (arr[i] % 3 == 0 && arr[i] % 2 != 0) ? console.log(arr[i]) : arr[i]; 