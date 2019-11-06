/*
 * Programming Quiz: Inline Functions (5-6)
 */

// don't change this code
function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
}

// your code goes here
var myFunc = function (x) {

    var laugh = "";
    for (var y = 1; y <= x; y++) {

        laugh += "ha";
    }

    return laugh + "!";

};
/* finish the function expression */

emotions("happy", myFunc(2));

// call the emotions function here and pass in an
// inline function expression
