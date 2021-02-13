
//challenge 1
//Print each array value and the sum so far
//The expected output will be:

var testArr = [6,3,5,1,2,4];
var sum=0;
for(var i=0; i<testArr.length; i++){
    sum= testArr[i]+sum;
    console.log(testArr[i]);
    console.log(sum);
}


//challenge 2
//Multiply each value in the array by its array position
//The expected output will be:


var testArr = [6,3,5,1,2,4];
var sum=0;
for(var i=0; i<testArr.length; i++){
    sum=testArr[i]*i;
    testArr[i] = sum;
}
console.log(testArr)