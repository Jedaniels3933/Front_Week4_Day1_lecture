//Making conditional statements 

let age=25;
if (age>=25){
  console.log("Welcome to the party")
}
// can also use const time=14 in this case
var time= 14;

if(time<12){
    console.log("Good morning");
}
else if (time<18){
    console.log("Good afternoon");
}
else{
    console.log("Good evening");
}
// Nested if statements 
let isRaining = true;
let umbrellaAvailable = false;

//isRaining = true
// !isRaining = false

if (isRaining) {
    if (umbrellaAvailable) {
        console.log("Don't forget your umbrella!");
    } else {
        console.log("It's raining, but you don't have an umbrella.");
    }
} else {
    console.log("No need for an umbrella today!");
}
if (!isRaining) {
    if (umbrellaAvailable) {
        console.log("Don't forget your umbrella!");
    } else {
        console.log("It's raining, but you don't have an umbrella.");
    }
} else {
    console.log("No need for an umbrella today!");
}
//  Or operator ||
if(isRaining || !umbrellaAvailable){
    console.log("You prolly want to grab your umbrella.");
}
// And operator &&
if(isRaining && !umbrellaAvailable){
    console.log("You prolly want to grab your umbrella.");
}

//Loops (range)
//Iteration , condition, iteration(changing value)
for(let i = 0 ; i <5; i++){
    console.log("Iteration",i);

}

//While loop without the count++ will result in an infinite loop
let count= 0 ;
while (count < 5){
    console.log(count);
    count++;
}

// do while loop
console.log("Do while loop");
let num = 5; 
do {
  console.log(num);
  num++; 
} while (num < 5); 

// for... in loop 
// Used to iterate over the iterable objects KEYS
// for index in numbers 

const fruits = ["apple", "cherry", "banana"]
for (const fruit in fruits){
  console.log("Fruit:", fruit)
}

console.log("Beginning of for...")

// for .. of loop 
// used to iterate over iterable obj values
//for num in numbers
for (const fruit of fruits){
  console.log("Fruit:", fruit)
}
const desserts = ["cake", "ice cream", "pie"]
for (const d of desserts){
  console.log("Dessert:", d)
}

