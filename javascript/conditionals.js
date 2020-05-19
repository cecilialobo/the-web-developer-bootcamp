let age = Number (prompt("What is your age?"))

if (age <= 0) {
   while (age <= 0) {
       age = Number (prompt ("Please, write your age again."));
    // console.log ("ERROR!")
    // alert ("ERROR! Your age is not valid.")
    // Did a better code for this exercise, so the person has to put a valid age.
    }
}

if (age === 21) {
    console.log ("Happy 21st birthday!");
    //Message for the user
    alert ("Happy 21st birthday!");
}

if (age % 2 !== 0) {
    console.log ("Your age is odd!")
    //Message for the user
    alert ("Your age is odd!");
}

if (age % Math.sqrt (age) === 0) {
    console.log ("Your age is a perfect square!")
    //Message for the user
    alert ("Your age is a perfect square!");
}