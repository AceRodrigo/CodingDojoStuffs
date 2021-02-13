// "CHALLENGE" 1
// Push a value into an array
// Given: var arr = [1,2,3,4], push in the value 5 and console.log the modified array [1,2,3,4,5]
// Notice how with the built in push method, the value is always added to the back
var arr=[1,2,3,4];
    arr.push(5);
    console.log(arr);


// CHALLENGE 2
// Given an array and a value, push the new value to the FRONT of the array -- remember 
// that the built in push function adds to the back!! So how can you add a value to the 
// FRONT of an array?
// Given: var arr = [2,3,4,5] and the value var num = 1, return an array => [1,2,3,4,5] 
// which has the new value pushed into the front of the array

var array1=[1,2,3,4];
array1.push(5);
console.log(array1);


var array2=[2,3,4,5];

function pushtofront(arr,value){
    arr.push(value);
        for(var i=arr.length-1; i>0; i--){
            arr[i] = arr[i-1]
        }
        arr[0] = value;
}

pushtofront(array2,5);
console.log(array2)


//challenge 1
//Create function rollOne() to return a randomly selected integer between 1-6 (inclusive).

//hint: You might want to look up Javascripts Math.random() function!


function rollOne(){
    var x = Math.floor((Math.random() *6) + 1);
    return(x);
}
console.log(rollOne())


//Challenge 2
// Second, create a function playFives(num), which should call rollOne() multiple times -'num'
//times, in fact, where 'num' is input parameter to playFives(num). Each time, it should print
//the value rollOne() returns, and if that return value is 5, also print "That's good luck!"

function playFives(num){
    for (var i=0; i<num; i++){
        var x = Math.floor((Math.random() *6) + 1);
            console.log(x)
            if(x == 5){
                console.log("That's good Luck!");
            }
    }
};
playFives(5);




// Challenge 3
// Third, create a new function named playStatistics(), which should call rollOne() eight times 
// (but not print anything after each call). After the last of these eight calls, it should print 
// out the lowest and highest values that it received from rollOne, among those eight calls.

function rollOne(){
    return Math.floor((Math.random()*6)+1)
}
function playStatistics(num){
    var max=0;
    var min=101;
    for(var i=1; i< num+1; i++){
        var x= rollOne();
        if(x>max){
            max=x;
        }
        if(x<min){
            min=x;
        }
    }
    console.log("Out of " + num + " dice rolls...");
    console.log("Lowest number rolled:"+min);
    console.log("Highest number rolled:"+max);
}

console.log(playStatistics(3));







//Change. Change is inevitable (especially when breaking a twenty). Make generateCoinChange(cents).
//Accept a number of American cents, compute and print how to represent that amount with
//smallest number of coins. Common American coins are pennies (1 cent), nickels (5 cents),
//dimes (10 cents), quarters (25 cents), and a dollar (100 cents).


function generateCoinChange(price){
    var pennies = 1
    var nickles = 5
    var dimes = 10
    var quarters = 25
    var dollar = 100


    for( i=0; i<price; i++){
        if(dollar>=price){
            
        }
        else(dollar<price)
            console.log(dollar=0)
    }
}

price=(500)
console.log('dollar:' + dollar(sum) + 'quarters:' + quarters(sum) + 'dimes:' + dimes(sum) + 'nickles:' + nickles(sum) + 'pennies:' + pennies(sum))




function getChange(cents){
    console.log("dollar:" + Math.floor(cents/100));
    cents=cents%100;
    console.log("quarters:" + Math.floor(cents/25));
    cents=cents%25;
    console.log("dimes:" + Math.floor(cents/10));
    cents=cents%10;
    console.log("nickles:" + Math.floor(cents/5));
    cents = cents % 5;
    console.log("pennies:" + cents);
}

