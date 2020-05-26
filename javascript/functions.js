// function isEven (number) {
//     if (number % 2 === 0) {
//         return true;
//     } else {
//         return false;
//     }
    
// }

function isEven (number) {
    return number % 2 === 0;
}

function factorial (number) {
    let result = 1;
    for (let i = 1; i <= number; i++) {
        // result = result * i
        result *= i;
    }
    return result;
}

function kebabToSnake (str) {
    let strReplace = str.replace(/-/g , "_");
    return strReplace; 
}