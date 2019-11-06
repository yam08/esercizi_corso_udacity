/*
 * Programming Quiz: JuliaJames (4-1)
  Directions:
  Write a while loop that:

  Loop through the numbers 1 to 20
  If the number is divisible by 3, print "Julia"
  If the number is divisible by 5, print "James"
  If the number is divisible by 3 and 5, print "JuliaJames"
  If the number is not divisible by 3 or 5, print the number
 */

var x = 1;
console.log("Numeri del 1 al 20");
while (x <= 20) {
    let y = 3;
    let z = 5;
    // check divisibility
    // print Julia, James, or JuliaJames
    // increment x
   if(x%y === 0){
     console.log("Numero divisi per 3 = "+ x +" Julia")
      }else if (x%z === 0) {
        console.log("Numero divisi per 5 = "+ x +" James")
 }
    if(x%y === 0 && x%z === 0 ){
        console.log("Numeri divisi per 3 e 5 = "+ x + " JuliaJames");
      }else if (!(x%y === 0) && !(x%z === 0 )){
              console.log("Numero (non) divisi per 3 e 5 = " + x);
              }

        x++;
}
