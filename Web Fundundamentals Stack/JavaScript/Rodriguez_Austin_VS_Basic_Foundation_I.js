//Challenge 1: Get 1 to 255
for(var i=0; i<255; i++){
    console.log(i + 1);
}

//Challenge 2: Get Even 1000
sum=0
for(var i=0; i<1000; i++){
    if(i % 2 ===0){
        sum= i+sum;
        console.log(sum);
    }
}

//Challenge 3: Sum odd 5000

sum=0
for(var i=0; i<5000; i++){
    if(i % 2 === 1){
        sum= i+sum;
        console.log(sum);
    }
}

//Challenge 4: Iterate an array

var arr=[2,4,6,8];
sum=0;
    for(var i=0; i<arr.length; i++){
        sum=arr[i]+sum;
    }
console.log(sum);


//Challenge 5: Find Max
const arr=[2,3,9,7,3,4];

console.log(Math.max(...arr));



//Challenge 6: Find Average

var arr=[2,4,5,6,7];
var total=0;
var count=0;

for(var i=0; i<arr.length; i++){
    total+= arr[i];
    count++;
}

console.log(total/count);


//Challengs 7: Array odd

var arr=[1,2,3,4,5];
var newArr[x];
for(var i=0; i<50; i++){
    i % 2 == 0;
    arr.push(newArr[i]);
}
console.log(newarr[x])


//Challenge 8: Greater than Y

const arrayToCount=[1,2,3,4,5];
const result = arrayToCount.filter(i => i!=1).length;
console.log('Total numbers found: ' + result);


//Challenge 9: Squares

var arr=[1,5,10,-2];
console.log(arr.map((x) => Math.pow(x, 2)));



//Challenge 10: Negatives

var arr=[1,5,10,-2]
var newArr=[]
function returnZero{
    for(i=0; i<arr.length; i++){
        if(arr[i]<0){
            
        }    
    }
    
}
