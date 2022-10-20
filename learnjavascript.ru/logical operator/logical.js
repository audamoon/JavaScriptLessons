console.log("Logical ||(OR):");
console.log (0 || undefined || "Hello" || 1); //returns "Hello"

let y1 = 1, x1 = 1;
console.log ("text" || y1++); //returns "text" and y1 doen't change
0 || x1++; //evaluates x1 and returns it
console.log(x1,y1,"\n"); //returns 2, 1

console.log("Logical &&(AND):");
let y2 = 1, x2 = 1;
console.log(undefined && y2++); //returns undefined and y2 doen't change
"hello" && x2++; //evaluates x2 and returns it
console.log(x2,y2,"\n") //returns 2,1

console.log("Logican !(NOT):");
console.log(!true);
console.log(!!""); //returns false. Analogue of Boolean