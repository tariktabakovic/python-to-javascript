// This is a comment.
//  this is another comment.

// Variables! (storing single pieces of info)
// turkey_legs_consumed = 3
var turkey_legs_consumed = 3;
//  1. Prefix your variables the first time you use them
//  2. Use camelCase
//  3. Terminate each line with ";"

// Var was the original way to declare variables
// "Let" is better. 
// 1. It gives you more control. (You can limit it to a specific 
// is/else or a specific loop.)  
let turkeysCooked = 2;

// "const" is like "let"(you have control), but:
// - You must assign it when you declare it.
// - You can never reassign it  
const numberOfTurkeysICanEat = 1;

// How to use there keywords:
// 1. Create your variable using const
// 2. If you find out you need to reassign it, change it to "let"

// print ("Hello World")
console.log("Hello World");

// print (turkeysCooked)
console.log(turkeysCooked);

// print (f"I ate {turkeysCooked} turkeys!")
console.log(`I ate ${turkeysCooked} turkeys!`);
// You can use backtick-strings for interpolations.
// also called - Template Srings
// also called - Template Literals

// print (f"how many turkeys I should eat {numberOfTurkeysICanEat- turkeysCooked}!")
console.log (`Turkeys to eat: ${numberOfTurkeysICanEat - turkeysCooked}`);
// Inside of "${}", you can put any valid Javascript expression.
debugger;
let catName = `Ziggy`;

// catName.toUpperCase();
// When do I upper-case in HTML vs CSS vs JavaScript?
// - Wherever you have control
// - If it wont change for a long time, HTML
// - If you can't change the HTML, use CSS
// - If you get the data from a server, Javascript

console.log(`${catName.toUpperCase()} is ${catName.length} characters long`);
// .toUpperCase is a method (ex: a function that belongs to an object)
// .length is a property (ex: a variable that belongs to an object)

const aboutMyCat = (`${catName.toUpperCase()} is ${catName.length} characters long`);
console.log(aboutMyCat)

catName = "Milllllla";
console.log(aboutMyCat);
