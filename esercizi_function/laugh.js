/*
 * Programming Quiz: Laugh (5-4)
 */

var laugh = function (x) {

    var laugh = "";
    for (var y = 1; y <= x; y++) {

        laugh += "ha";
    }

    return laugh + "!";

}; /* finish the function expression */

console.log(laugh(10));