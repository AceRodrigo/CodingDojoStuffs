function a(){
    return 35;
}
console.log(a())

//prediction: 
//35

function a(){
    return 4;
}
console.log(a()+a());

//Prediction:
//4+4=8

function a(b){
    return b;
}
console.log(a(2)+a(4));

//Prediction:
//2,4 wrong

//answer=6

function a(b){
    console.log(b);
    return b*3;
}
console.log(a(3))

//Prediction:
//3, 9

function a(b){
    return b*4;
    console.log(b);
}
console.log(a(10))

//Precition 
//40 doesn't run the console.log(b) due to the return function

function a(b){
    if(b<10) {
        return 2;
    }
    else     {
        return 4;
    }
    console.log(b);
}
console.log(a(15));


//Prediction:
//4 is doesn't console.log(b) due to it being after the if else statement.


function a(b,c){
    return b*c;
}
console.log(10,3);
console.log( a(3,10) );

//Prediction:
//10,3
//30 The first console.log does not call the function so it will only console.log those numbers.


function a(b){
    for(var i=0; i<10; i++){
        console.log(i);
    }
    return i;
}
console.log(3);
console.log(4);

//Prediction: 
//3
//4
// You do not call the function at all so it only displays what is in the console.log


function a(){
    for(var i=0; i<10; i++){
        i = i +2;
        console.log(i);
    }
}
a();

//Predction
//2,4,6,8 wrong

//Answer:2,5,8,11

function a(b,c){
    for(var i=b; i<c; i++) {
        console.log(i);
    }
    return b*c;
}
a(0,10);
console.log(a(0,10));


//Prediction:
//0,1,2,3,4,5,6,7,8,9
//0,1,2,3,4,5,6,7,8,9,0


function a(){
    for(var i=0; i<10; i++){
        for(var j=0; j<10; j++){
            console.log(j);
        }
        console.log(i);
    }
}

//Prediction:
//Nothing is going to happen due to the function not being called.


function a(){
    for(var i=0; i<10; i++){
        for(var j=0; j<10; j++){
            console.log(i,j);
        }
        console.log(j,i);
    }
}


//Prediction:
//Nothing is going to happen due to teh function not being called.



var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
console.log(z);

//Prediction:
//10 
//The function is not being called so it will only console log z


var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
a();
console.log(z);

//Prediction:
//15, 10


var z = 10;
function a(){
    var z = 15;
    console.log(z);
    return z;
}
z = a();
console.log(z);

//Prediction:
//15, 15 
//The function is called and runs a() and it console logs z=15 then returns 15 to the var z=15.
//Then it console logs z which is now 15.

//I got 13 out of the 15 correct.