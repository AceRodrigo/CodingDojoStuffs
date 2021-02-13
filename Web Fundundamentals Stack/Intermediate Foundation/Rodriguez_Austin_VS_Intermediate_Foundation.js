//Challenge 1: Sigma

function sigmaCal(start, end, calculation){
    var sigma=0;
    for(var i=start; i<=end; i++){
    sigma += calculation(i);
    }
    console.log(sigma);
}

sigmaCal(1,4, function(x){ return 2*x +1;});

//Challenge 2:Factorial

function factorialCal(start, end, calculation){
    var factorial=0;
    for(var i=start; i<=end; i++){
        factorial += calculation(i);
    }
    console.log(factorial);
}

factorialCal(3,5, function(x){ return 2*x +1})



//Challenge 3: Fibonacci
function fibonacci(n){
    const arr=[0,1];
    for(var i=2; i<n+1; i++){
        arr.push(arr[i-2]+ arr[i-1]);
    }

    return arr[n];
}

console.log(fibonacci(5));

//Challenge 4: Array: Second-to-Last


const arr = [42, true, 4, "Liam", 7];
console.log(arr[arr.length-4]);



//Challenge 5: Nth-to-Last

x=(4)
const arr = [5,2,3,6,4,9,7];
console.log(arr[arr.length-x]);


//Challenge 6: Array:Second-Largest
//return 7
let input = [42,1,4,3.14,7]

const secondLargest = (arr, first = -Infinity, second = -Infinity, firstPos = -1, secondPos = -1, idx = 0) => {
    arr = first === -Infinity ? [...arr] : arr;

    const el = arr.shift();
    if (!el) return { second, secondPos }

    if (el > first) {
        second = first;
        secondPos = firstPos;
        first = el;
        firstPos = idx;
    } if (el < first && el > second) {
        second = el;
        secondPos = idx;
    }  

    return secondLargest(arr, first, second, firstPos, secondPos, ++idx);
}

console.log(secondLargest(input));


//challenge 7: Double Trouble

var arr = [4,"Ulysses",42,false];

function double(stuntdouble){
    var arr2=[];
    for(var i=0; i<stuntdouble.length; i++){
        arr2.push(stuntdouble[i]);
        arr2.push(stuntdouble[i]);
    }
    return arr2;
}

console.log(double(arr));
