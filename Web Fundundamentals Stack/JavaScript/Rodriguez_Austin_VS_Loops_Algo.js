for (var i=0; i<20; i++){
    if(i%2 !==0){
        console.log(i);
    }    
}

var arr=[1,2,3,4,5];

var sum=0;

for (var i=0; i<arr.length; i++){
    sum= arr[i] + sum;
    console.log(i+1)
    console.log(sum)
}