console.log("task1:");
let i = 3;
while (i) {
    console.log(i--);
} 

console.log("task2:");
let j = 0;
while (++j < 5) console.log(j); //output: 1 2 3 4 |j: 1 2 3 4
console.log("");
let g = 0;
while (g++ < 5) console.log(g); //output: 1 2 3 4 5 |g: 0 1 2 3 4

console.log("task3:");
for (let i = 0; i < 5; i++) console.log(i); //i: 0 1 2 3 4 
console.log("");
for (let i = 0; i < 5; ++i) console.log(i); //i: 0 1 2 3 4

console.log("task4:");
for (let i = 1; i < 6; i++) {
    console.log(2*i);
}

console.log("task5");
let k = 0
while (k < 3) {
    console.log(`number ${k}`);
    k++;
}

console.log("task7:");
let n = 10
task7:
for (let primeNumber = 2; primeNumber <= n; primeNumber++) {
    for(let i = 2; i < primeNumber; i++) {
        if (primeNumber % i == 0) continue task7;
    }
    console.log(primeNumber);
}