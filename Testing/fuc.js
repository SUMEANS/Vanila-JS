/*
function sayHello(potato,year){
    console.log('Hello!' , potato, "Welcome to ", year);
}

sayHello('world' , 2020);         // 함수 ,, argument(변수) 필요
console.log("Hi!");

*/

const calculator = {
    plus: function(a,b){
        return a + b;
    },
    minus: function(x,y){
        return x - y;
    }
};


const plus = calculator.plus(5,5);
const minus = calculator.minus(6,2);
console.log("The answer is",plus);
console.log("The answer is",minus);