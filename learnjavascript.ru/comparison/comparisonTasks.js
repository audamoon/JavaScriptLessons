console.log("String comparison");
//JS compares string depends of Unicode's number, greater is more
console.log("Z" > "A"); //returns true
console.log("cat" < "cat1"); //returns true
console.log("Laser" < "Lasur"); //returns true
console.log("Z" > "Alice", '\n'); //returns true 

console.log("Value comparison with different types");
//Before comparison JS will convert all values to Number type
console.log("12" > 2); //returns true
console.log(2 == "Ann") //returns false, because all non-numberic string converts to NaN witch is always false
console.log(undefined == null); /*returns true, because EMCAScript specification says "If x is null and y is undefined, return true"
By the way both things means "nothing", so having them be equals makes intuitive sense.*/

console.log(undefined === null); //returns false, because they have different type
console.log(NaN == NaN);
console.log(NaN === NaN);  //returns false, because NaN in any comparison is false