/*
 * Programming Quiz: Countdown, Liftoff! (4-3)
 * 
 * Using a while loop, print out the countdown output above.
 */

// your code goes here

var time = 60;
while (time >= 1) {

    console.log("T-" + time + " seconds");

    if (time === 51) {
        time = 50;
        console.log("Orbiter transfers from ground to internal power");
    }

    if (time === 32) {
        time = 31;
        console.log("Ground launch sequencer is go for auto sequence start");
    }

    if (time === 17) {
        time = 16;
        console.log("Activate launch pad sound suppression system");
    }

    if (time === 11) {
        time = 10;
        console.log("Activate main engine hydrogen burnoff system");
    }

    if (time === 7) {
        time = 6;
        console.log("Main engine start");
    }

    if (time === 1) console.log("Solid rocket booster ignition and liftoff!");

    time--;


}



