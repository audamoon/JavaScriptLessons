console.log("Assigntment:");
let addition = 10; 
addition += 5; //also works with *,/,**,% and etc.
console.log(addition, "\n"); //returns 15

console.log("comma"); //evaluates each of its operands (from left to right) and returns value of the last operand
for (a = 0, b = 4; a < 5; a++, b--) {
    console.log(`a = ${a}, b = ${b}`);
}

let valueOfLastOperand = (3 + 3, 4 + 4); //returns 8
console.log(valueOfLastOperand);