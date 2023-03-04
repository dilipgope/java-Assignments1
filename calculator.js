let num1 = 6
let num2 = 3
let inputOperator = '+'
let result 
switch (inputOperator){
    case '+':
       result= num1+num2
        console.log(`Result = ${result}`);
        break;

    case '-':
        result= num1-num2
        console.log(`Result = ${result}`);
        break;
    

    case '*':
        result= num1*num2
        console.log(`Result = ${result}`);
        break;

     case '/':
            result= num1/num2
            console.log(`Result = ${result}`);
            break;
        
    default:
        console.log('Invalid Operator');
    
    
}