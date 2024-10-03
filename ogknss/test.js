var num1 = prompt("input number 1");
var num2 = prompt("input number 2");

var minus = num1 - num2;


if (minus > 0) {
    console.log("number is higher than 0");
    let evenodd = minus % 2;
    
    if(evenodd == 0){
        console.log("even");
    }
    else {
        console.log("odd");
    }
} 

else {
    console.log("number is lower or equal to 0");
}