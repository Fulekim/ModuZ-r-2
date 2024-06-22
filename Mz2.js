//1. Feladat 
function factorial(num) {
    if (num < 0) {
        return undefined;
    }
 if (num === 0) {
        return 1;
    }
    let result = 1;
for (let i = 1; i <= num; i++) {
        result *= i;
    }
 return result;
}
console.log(factorial(11));
console.log(factorial(2)); 
console.log(factorial(6)); 
console.log(factorial(-1)); 
console.log(factorial(4)); 




//2.Feladat

function fizzbuzz(n) {
    for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
            console.log('fizzbuzz');
        } else if (i % 3 === 0) {
        console.log('fizz');
        } else if (i % 5 === 0) {
            console.log('buzz');
     } else {
            console.log(i);
 }
 }
}
fizzbuzz(20);

//3.Feladat

function getPositives(arr) {
    let=arr([1, 10, -3, 4, -156, 0, 3, 4])
    let positives = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
         positives.push(arr[i]);
    }
    }
    return positives;
}