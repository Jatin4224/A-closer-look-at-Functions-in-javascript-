
'use strict';

////------javascript functions-------
/*
-----JavaScript Function Syntax---
A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().

Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).

The parentheses may include parameter names separated by commas:
(parameter1, parameter2, ...)

The code to be executed, by the function, is placed inside curly brackets: {}

example -
function name(parameter1, parameter2, parameter3) {
  // code to be executed
}

Function parameters are listed inside the parentheses () in the function definition.

Function arguments are the values received by the function when it is invoked.

Inside the function, the arguments (the parameters) behave as local variables.

-------Function Invocation-----
The code inside the function will execute when "something" invokes (calls) the function:

When an event occurs (when a user clicks a button)
When it is invoked (called) from JavaScript code
Automatically (self invoked)

---------------Function Return--------
When JavaScript reaches a return statement, the function will stop executing.

If the function was invoked from a statement, JavaScript will "return" to execute the code after the invoking statement.

Functions often compute a return value. The return value is "returned" back to the "caller":

Example
Calculate the product of two numbers, and return the result:

let x = myFunction(4, 3);   // Function is called, return value will end up in x

function myFunction(a, b) {
  return a * b;             // Function returns the product of a and b
} */


// 1)----DEfault parameters-----(due)
// A JavaScript function is a block of code designed to perform a particular task.
// A JavaScript function is executed when "something" invokes it (calls it).


const createBooking = function (flightNum,numPassengers, price) {

  const booking = {
    flightNum,
    numPassengers = 1,
    price = 199 * numPassengers
  }
}
555555

//2)--How Passing Arguments Works: Value vs. Reference---

const flight = 'LH234';
const jatin = {
  name: 'jatin sharma',
  passport: 8890890111
}
const checkIn = function(flightNum, passenger) {
 flightNum = 'LH999';
 passenger.name = 'Mr.' + passenger.name;

 if(passenger.passport === 8890890111) {
   alert('checked in')
 } else {
   alert('wrong passport')
 }
}

//calling the function
// checkIn(flight, jatin);
// console.log(flight);
// console.log(jatin);
// //op - LH234
//     //   {name: "Mr.jatin sharma", passport: 8890890111}
//
//
// //is the same as doing
// const fligthNum = flight;
// const passenger = jatin;

//another real life eexample
const newPassport = function(person) {
  person.passport = Math.trunc(Math.random() = 10000000);

};

newPassport(jatin);
checkIn(flight, jatin);

///in programming,there are two terms that are used all the time when dealing with functions,
//which is passing by value,and passing by reference.
//so javascript does not have passing by reference only passing by value,even though it looks like it's passing by reference.

// 3)------- First-Class and Higher-Order Functions-------

1)First-class  Functions
-JavaScripttreats functions as first-class citizens.
-this  means that functions are simply values.
-Functions are just another "type"of object.
//why this javascript work this way?
well,it's simply because functions are really just another type of objects in javscript.and since objects are values.fuunctions are values too.
and since functions are values,there is a bunch of intereseting things that we can do with them,like storing them in variables or object properties.

//store functions in variables or properties
const add = (a, b) => a + b;
const counter = {
  value: 23
  inc: function() {
    this.value++;
  }
}

//Pass functions as arguments to OTHER Functions
const great = () => console.log('hey jatin');
btnclose.addEventListener('Click', greet)

//we can also retuern a function from another function.
//remeber that functions are objects.and many types of objects in javascript have methods,right?like array methods,for example
// and actually there are also function methods.so methods that we can call on functions.

example- bind method
counter.inc.bind(someOtherObject);

//Now the javascript has first-class functions makes it possible for us to use and write higher order functions.
//HIGHER-ORDER Functions
-A FUNCTION thtat recieves another function as an argument,that returns a new fucntion or both
-this is only possible because of first-class functions

1)FUNCTION that receives another function
const great = () => console.log('hey jatin');
btnClose addEventListener 'click', greet)
//here addEventListener - highe-order fucntion
// greet - callback function

2)Function that returns new function
function count() {//higher order function
  let counter = 0;
  return function() {//returned function
    counter++;
  }
}
//some people thing they both are samething but actually they mean different thhings ,so first class functions is just a feature that a programming language either has or does not have all it means that all functions are values.
//there are no first class functions in practice,its just a concept.there are however higher order functions in practice,which are possible because the language supports first class functions.so its a subctle difference, but still worth noting if you want to be showoff your js skills.


// (4)-----Functions Accepting Callback Functions------
//A callback is a function passed as an argument to another function
//This technique allows a function to call another function
//A callback function can run after another function has finished
// now that we know what higher order functions are,let's create our own,just to demonstrate how they work.so in this lecture,we're going to create a function that accepts other functions as an input.

//to start,let's write functions that do simple string transformations



// So one I'm going to call one word and this will simply replace all the spaces in a word.
// So string. replace and then we're going to select all these spaces.
// And remember for that,we need to use this regular expression
// with the G flag and then replace them
// with simply an empty string.And then we also convert that to lowercase.
// Okay,so this function here,what simply work anywhere in our code with any string
// and it takes in one string and returns a new one without any spaces in it.
const oneWord = function(str) {
  return str.replace(/ /g,'').toLowerCase()
}

//let's create antoher one upper first words,which also takes in a string.
//so these two functions they will later be the functions that we pass in into another function.so this function here will simply transform the first word to uppercase.
//so lets just first spilt the string.

const upperFirstWord = function(str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...otherss].join(' ');
};


//HIGHER-ORDER FUNCTION
const transformer = function(str, fn) {
//this functn we'ill take in also a string,but as a second argument,it will take in a function.
    console.log(`Original string: ${str}`);
    console.log(`transformed string: ${fn(str)}`);

    console.log(`transformed BY: ${fn.name}`);
};

//how to call this function
transformer ('Javascript is the best', upperFirstWord);//we are not calling this function here.we are only passing it in and it will be to
//op-Original string: JavaScript is the best!
// Transformed string: JavaScript is the best!
// Transformed string: Javascript is the best!
// Transformed by: upperFirstword


//now lets try the ame with other functions
transformer ('JavaScript is the best', oneWord);
//op-Transformed string:javascriptisthebest

//so let's recap,we're calling the transformer function here and into that function nwe are passing the callback function.and that's because we don not call them ourselves.
//but instead we call javascript to basicALLY TELL THEMM LATEr.and in this case,in this case calling htem later happends right here.(transformer ('Javascript is the best', upperFirstWord))....so it's the transform of function that weill call these callback functions.
//and the CALL back functions in here are of course called fn.


//why our callback functions so much used in javascript?and why are they so helpful?
// 1)it makes it easy to split up our code into more reusable and interconnected parts.
// 2)allow us to create abstraction.means is that we hide the detail of some code implementation beacuse we don't really care about all that detail.and this allows us to think about problems at a higher more abstract level.and so that's why it's called an abstraction.


s
// (5)--------------- Functions Returning Functions----------
// let's create a function that returns a new function.


// so here we can pass a in a greeting like hi or hello and then all this function will do is to return a new function.

const great = function(greeting) {
return function (name) {
  console.log(`${greeting} ${name}`);
};
};

const greeterHey = great('Hey');
greeterHey('Jatin');
greeterHey('sharma');

great('Hello')('Jatin');
//op -    Hey Jatin
       // Hey sharma
       // Hello Jatin


// (6)-----The caLL AND apply Methods-----
