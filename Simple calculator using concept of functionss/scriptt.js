function result(num1,operator,num2){
    switch(operator){
        case '+': document.write("Your result of addition is: "+(num1+num2)); break;
        case '*': document.write("Your result of multiplication is: "+(num1*num2)); break;
        case '/': document.write("Your result of division is: "+(num1/num2)); break;
        case '-': document.write("Your result of subtraction is: "+(num1-num2)); break;
        default: document.write("Invalid input");
    }
} 

var num1 = Number(window.prompt("Enter your first number:"))
var operator = window.prompt("Enter an operator ( + , - , * , / ):")
var num2 = Number(window.prompt ("Enter your second number:"))

result(num1,operator,num2);