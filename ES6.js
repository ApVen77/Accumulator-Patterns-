//use strict
'use strict'

//template literal 
const firstName = 'Jane';
console.log(`Hello ${firstName}!
How are you
today?`);

// Output:
// Hello Jane!
// How are you
// today?

// const let 
function varTest() {
    var x = 1;
    {
      var x = 2;  // same variable!
      console.log(x);  // 2
    }
    console.log(x);  // 2
  }
  
  function letTest() {
    let x = 1;
    {
      let x = 2;  // different variable
      console.log(x);  // 2
    }
    console.log(x);  // 1
  }

//ternary operators
var age = 26;
var drink = (age >= 21) ? "Beer" : "Juice";
console.log(drink); // "Beer"

//arrow functions

// Traditional Function
function sample (a){
    return( a + 100);
    
}
    
  // Arrow Function Break Down
  
  // 1. Remove the word "function" and place arrow between the argument and opening body bracket
  (a) => {
    return a + 100;
  }
  
  // 2. Remove the body brackets and word "return" -- the return is implied.
  (a) => a + 100;
  
  // 3. Remove the argument parentheses
  a => a + 100;


  //Array methods

let prices = [500, 700, 1000];
let taxed = Array.from(prices, price => price * 1.05);
console.log(taxed);
 
// [525, 735, 1050]

let prices = [500, 700, 1000];
prices.fill(2000);
console.log(prices);
 
// Array [ 2000, 2000, 2000 ]

let prices = [500, 700, 1000];
prices.fill(2000, 0);
console.log(prices);
 
// Array [ 2000, 2000, 2000 ]

let prices = [500, 600, 700, 800, 900, 1000, 1500];
let result = prices.find(price => price > 777);
console.log(result);
 
// 800

const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]