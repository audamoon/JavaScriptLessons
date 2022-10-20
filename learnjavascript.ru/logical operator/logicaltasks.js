console.log( null || 2 || undefined); //2
console.log(console.log(1) || 2 || console.log(3)) //1 then 2, 3 will be ignored, because OR returns first True value
console.log(1 && null && 2); //null
console.log(console.log(1) && console.log(2)); //console.log doesn't return value, so we get 1 then undefined
console.log(null || 2 && 3 || 4, "\n"); //3 because AND has higher precedence than OR and if all values are truly AND returns the last value.


console.log("If and logical operators: \n");

let age = 1;
let valueInclusiveRange = (age >= 14 && age <= 90);

if (valueInclusiveRange) {
    console.log('Age in range [14;90]');
} else {
    console.log("Age out of range [14;90]");
}

if (!valueInclusiveRange) {
    console.log("Age in range ]-inf;14[U]90;inf+[");
} else {
    console.log("Age out of range ]-inf;14[U]90;inf+[");
};

let valueNonInclusiveRange = (age < 14 || age > 90);

if (valueNonInclusiveRange) {
    console.log("Age in range ]-inf;14[U]90;inf+[");
} else {
    console.log("Age out of range ]-inf;14[U]90;inf+[");
}
