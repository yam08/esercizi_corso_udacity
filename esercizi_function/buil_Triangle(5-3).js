/*
 * Programming Quiz: Build A Triangle (5-3)
 */

// creates a line of * for a given length

//var length;

function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}


function buildTriangle(num) {
    var triangle = "";
    for (x = 1; x <= num; x++) {
        triangle += makeLine(x);

    }
    return triangle;
}


// test your code by uncommenting the following line
console.log(buildTriangle(10));


//var makeLine = makeLine();
// your code goes here.  Make sure you call makeLine() in your own code.

/*Questa funzione mi stampa 10 stelle
 la risposta e corretta.

function buildTriangle(num){
    var line1 = "";
    for(num;num>=1;num--){
        
        line1 += "* ";
        console.log(line1);
    }
   
    return line1;
}
*/
