console.log("While loop:");
let k = 3;
while (k > 0) {
    console.log(k--);
} //repeats statement 

console.log("Do...while loop:");
let g = 3;
do {
    console.log(g);
    g++;
} while (g < 3) //statement always execute once before the condition is checked

console.log("'for' loop:");
for (let i = 0, j = 3; i < 3 && j < 10 ; i++, j++) {
    console.log (`i = ${i}, j = ${j}`);
} //repeats until a specified condition evaluates to false

console.log("Break:");
let userNumber = 0;
while (true) {
    if (userNumber % 5 == 0) break;
    userNumber++;
}
console.log(userNumber); //break interrupt loop

console.log("Continue:");
for (let OddNumber = 0; OddNumber < 6; OddNumber++) {
    if (OddNumber % 2 == 0) continue;
    console.log(OddNumber);
} /* continue terminates execution of the statements in the current iteration 
and continues execution of the loop with the next iteration */
console.log("labels:"); 
loop1: for(let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (j == 1) continue loop1;
        console.log(`Coordinates i = ${i}, j = ${j}`);
    }
    console.log("iteration N",i);
} /*label let you identify loop and then use break or continue
In this example last console.log will not work, because continue will skip loop1's iteration */