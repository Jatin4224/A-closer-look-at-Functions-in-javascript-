'use strict';

// ------ JavaScript Functions ------
/*
----- JavaScript Function Syntax ---
A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().

Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).

The parentheses may include parameter names separated by commas:
(parameter1, parameter2, ...)

The code to be executed by the function is placed inside curly brackets: {}

Example:
function name(parameter1, parameter2, parameter3) {
  // code to be executed
}

Function parameters are listed inside the parentheses () in the function definition.

Function arguments are the values received by the function when it is invoked.

Inside the function, the arguments (the parameters) behave as local variables.

------- Function Invocation -------
The code inside the function will execute when "something" invokes (calls) the function:

- When an event occurs (when a user clicks a button)
- When it is invoked (called) from JavaScript code
- Automatically (self-invoked)

--------------- Function Return --------
When JavaScript reaches a return statement, the function will stop executing.

If the function was invoked from a statement, JavaScript will "return" to execute the code after the invoking statement.

Functions often compute a return value. The return value is "returned" back to the "caller":

Example:
Calculate the product of two numbers and return the result:

let x = myFunction(4, 3);   // Function is called, return value will end up in x

function myFunction(a, b) {
  return a * b;             // Function returns the product of a and b
}
*/

// 1) ---- Default Parameters ---- (due)
// A JavaScript function is a block of code designed to perform a particular task.
// A JavaScript function is executed when "something" invokes it (calls it).

const createBooking = function (flightNum, numPassengers, price) {
  const booking = {
    flightNum,
    numPassengers: 1,
    price: 199 * numPassengers,
  };
};

// 2) -- How Passing Arguments Works: Value vs. Reference ---

const flight = 'LH234';
const jatin = {
  name: 'Jatin Sharma',
  passport: 8890890111,
};
const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr.' + passenger.name;

  if (passenger.passport === 8890890111) {
    alert('checked in');
  } else {
    alert('wrong passport');
  }
};

// calling the function
// checkIn(flight, jatin);
// console.log(flight);
// console.log(jatin);
// op - LH234
//     //   {name: "Mr. Jatin Sharma", passport: 8890890111}
//
//
// // is the same as doing
// const flightNum = flight;
// const passenger = jatin;

// another real-life example
const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000);
};

newPassport(jatin);
checkIn(flight, jatin);

// In programming, there are two terms that are used all the time when dealing with functions,
// which is passing by value and passing by reference.
// So JavaScript does not have passing by reference, only passing by value, even though it looks like it's passing by reference.

// 3) ------- First-Class and Higher-Order Functions -------

// 1) First-class Functions
// - JavaScript treats functions as first-class citizens.
// - This means that functions are simply values.
// - Functions are just another "type" of object.
// - Why does JavaScript work this way? Well, it's simply because functions are really just another type of object in JavaScript, and since objects are values, functions are values too.
// - Since functions are values, there are a bunch of interesting things that we can do with them, like storing them in variables or object properties.

// Store functions in variables or properties
const add = (a, b) => a + b;
const counter = {
  value: 23,
  inc: function() {
    this.value++;
  }
};

// Pass functions as arguments to OTHER Functions
const greet = () => console.log('Hey Jatin');
btnClose.addEventListener('click', greet);

// We can also return a function from another function.
// Remember that functions are objects, and many types of objects in JavaScript have methods, right? Like array methods, for example.
// And actually, there are also function methods, so methods that we can call on functions.

// Example - bind method
counter.inc.bind(someOtherObject);

// Now, JavaScript having first-class functions makes it possible for us to use and write higher-order functions.
// HIGHER-ORDER Functions
// - A FUNCTION that receives another function as an argument, that returns a new function, or both.
// - This is only possible because of first-class functions.

// 1) FUNCTION that receives another function
const greet = () => console.log('Hey Jatin');
btnClose.addEventListener('click', greet);
// here addEventListener - high-order function
// greet - callback function

// 2) Function that returns a new function
function count() { // higher-order function
  let counter = 0;
  return function() { // returned function
    counter++;
  };
}
// Some people think they both are the same thing, but actually, they mean different things, so first-class functions are just a feature that a programming language either has or does not have. All it means is that all functions are values.
// There are no first-class functions in practice; it's just a concept. There are, however, higher-order functions in practice, which are possible because the language supports first-class functions. So it's a subtle difference, but still worth noting if you want to show off your JS skills.

// (4) ----- Functions Accepting Callback Functions ------
// A callback is a function passed as an argument to another function.
// This technique allows a function to call another function.
// A callback function can run after another function has finished.
// Now that we know what higher-order functions are, let's create our own, just to demonstrate how they work. So in this lecture, we're going to create a function that accepts other functions as an input.

// To start, let's write functions that do simple string transformations.

// So one I'm going to call one word, and this will simply replace all the spaces in a word.
// So string. replace and then we're going to select all these spaces.
// And remember for that, we need to use this regular expression with the G flag and then replace them with simply an empty string. And then we also convert that to lowercase. Okay, so this function here, what it simply works anywhere in our code with any string and it takes in one string and returns a new one without any spaces in it.
const oneWord = function(str) {
  return str.replace(/ /g, '').toLowerCase();
};

// Let's create another one, upper first words, which also takes in a string.
// So these two functions, they will later be the functions that we pass in into another function. So this function here will simply transform the first word to uppercase.
//
// So, let's create another one, "upperFirstWord," which also takes in a string.
// These two functions will later be the functions that we pass into another function. "upperFirstWord" will transform the first word to uppercase.
// So let's first split the string.

const upperFirstWord = function(str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// HIGHER-ORDER FUNCTION
const transformer = function(str, fn) {
  // This function will take a string as the first argument and, as a second argument, it will take a function.
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

// How to call this function
transformer('JavaScript is the best', upperFirstWord);
// We are not calling this function here; we are only passing it in, and it will be called later.
// Op - Original string: JavaScript is the best!
//      Transformed string: JavaScript is the best!
//      Transformed by: upperFirstWord

// Now, let's try the same with other functions
transformer('JavaScript is the best', oneWord);
// Op - Transformed string: javascriptisthebest

// Let's recap. We're calling the "transformer" function here, and we're passing the callback function into it. We don't call them ourselves; instead, it's the "transformer" function that will call these callback functions. The callback functions, in this case, are called "fn."

// Why are callback functions so much used in JavaScript, and why are they so helpful?
// 1) It makes it easy to split up our code into more reusable and interconnected parts.
// 2) It allows us to create abstractions. This means we can hide the details of some code implementation because we don't really care about all that detail. It allows us to think about problems at a higher, more abstract level. So that's why it's called an abstraction.

// (5) ------------ Functions Returning Functions ----------
// Let's create a function that returns a new function.

// Here, we can pass in a greeting like "hi" or "hello," and then this function will return a new function.

const greet = function(greeting) {
  return function(name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Jatin');
greeterHey('Sharma');

greet('Hello')('Jatin');
// Op - Hey Jatin
//      Hey Sharma
//      Hello Jatin
