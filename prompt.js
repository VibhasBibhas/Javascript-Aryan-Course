let prompt = require('prompt-sync')();

const answer = prompt ('Do you like JS? (Y/N)')


if (answer == "y" || answer == "Y") {
    console.log("Nice! That's great!");

} else if (answer == "n" || answer == "N") {
    console.log("Aww Man");

} else if (answer == "") {
    console.log("At least say something!");
} else {
    console.log("I'm not sure if that's a yes or no.");
}