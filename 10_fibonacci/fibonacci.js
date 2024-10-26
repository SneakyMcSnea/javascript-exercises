const fibonacci = function(fibonacciMember) {
+fibonacciMember;
if (fibonacciMember < 0){
    return "OOPS";
}
if (fibonacciMember == 0){
    return 0;
}
let fibonacciArr = [1, 1];
let iterations = fibonacciMember - 2;
for (k = 0; k < iterations; k++){
    result = fibonacciArr[k] + fibonacciArr[k+1];
    fibonacciArr.push(result);
}
return fibonacciArr[fibonacciMember - 1];
};

// Do not edit below this line
module.exports = fibonacci;
