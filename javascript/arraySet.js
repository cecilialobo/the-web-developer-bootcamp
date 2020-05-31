// *** printReverse () ***
function  printReverse(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}

// *** isUniform () ***
function isUniform(arr){
    let first = arr[0];

    for(let i = 1; i < arr.length; i++) {
        if(arr[i] !== first){
            return false;
        }
    }

    return true; 
}

// *** sumArray () ***
 function sumArray(arr) {
    let total = 0;
    // for (let i = 0; i <= arr.length; i++) {
    //     total = total + arr[i];
    // }
    arr.forEach (function(element){
        total += element;
    });
    return total;
 }

 // *** max () ***
 function max(arr){
    let max = arr[0];      
    for (let i = 1; i < arr.length; i++){
        if (arr[i] > max){
            max = arr[i];
        }
    }
    return max;
 }
