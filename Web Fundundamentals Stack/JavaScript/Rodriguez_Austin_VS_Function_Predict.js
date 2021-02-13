function greeting(){
    return "Hello";
    console.log("World");
}
var word = greeting();
console.log(word)

//prediction 1
//console.log("Hello")


function add(num1, num2){
    console.log("Summing Numbers!");
    console.log("num1 is: " + num1);
    console.log("num2 is: " + num2);
    var sum = num1 + num2;
    return sum;
}
var result1 = add(3,5);
var result2 = add(4,7);
console.log(result1);
console.log(result2);

//prediction 2
//console.log= ("Summing Numbers!")
//console.log= ("num1 is:3")
//console.log= ("num2 is:5")
//console.log= "Summing Numbers!"
//console.log= "num1 is:4"
//console.log= "num2 is:7"
//console.log=8
//console.log= 12

function highFive(num){
    for(var i=0; i<num; i++){
        if(i == 5){
            console.log("High Five!");
        }
        else{
            console.log(i);
        }
    }
}


//Prediction 3
// Console.log= nothing. does not start with a variable to begin with to verify what number is and what it could be


