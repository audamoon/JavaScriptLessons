console.log("if,else,else if operators:")
function contidionalDemo(value) {
    if (value == true) {
        console.log("True");
    }
    else if (value == null) {
        console.log("null \n");
    }
    else {
        console.log("False");
    }
}
contidionalDemo(true);
contidionalDemo(false);
contidionalDemo(null);

console.log("conditional (ternary) operator:");
let birthday = 2000;
let welcomeMessage = (birthday <= 2000) ? "Welcome to 19th century club":"Bye, baby :D";
console.log(welcomeMessage);

function conditionalChains() {
    return condition1 ? value1
          : condition1 ? value2
          : condition3 ? value3
          : value4
} //this is equals to if...else chain

