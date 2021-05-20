//Change me to ES6 syntax

//1
let shoppingDone = false;
let childAllowane= 0; 

let shopping= (shoppingDone=== true) ? childAllowane= 10 : childAllowane = 5; 
console.log (shopping) 


//2 

const time= new Date().toLocaleString();
let str = 'Hello';
let name= "April";
document.write(`${str} ${name} it is currently ${time}`); /n/ 


//3


  
//function with parameters
// ES5
// var multiplyES5 = function(x, y) {
//   return x * y;
// };
// multiplyES5(5, 10); 

// // ES6
// //  🌺

// 
                    // take in an argument (paremeters) => Expression  
const multiplyES5= (x, y) => {return x * y}
multiplyES5(5, 10);

//find and fix errors in prgramming languages
// referenceError- syntax, variable declaration, missing in an object
// typeError - logical, incomplete, scope, cannot read/recongize 

//console.log 
//source in chrome dev tools 
//examine our files 
//set breakpoints 
//chrome extensions 
//debug tool in VSC
//Debug ME//

person; ///no variable declaration //reference error 

let data = {}; //no key-value pairs defined empty object 
data.displayInfo();

let data = {};
data.displayInfo.foo = "bar"; //foo is undefined it doesn't belong to anything

function data(){
    let thing = "foo";
}
//scoping issue 
data();

///
for(let i=0; i < 5; i++){
    console.log(i);
}

function addIfEven(num){
    if(num % 2 === 0){
        return num + 5;
    }
    return num;
}


function loopToFive(){
    for(let i=0; i < 5; i++){
        console.log(i);
    }
}

function displayEvenNumbers(){
    let numbers = [1,2,3,4,5,6,7,8];
    let evenNumbers = [];
    for(let i=0; i<numbers.length-1; i++){
        if(numbers % 2 === 0); {
            evenNumbers.push(i);
        }
        return evenNumbers;
    }
}
displayEvenNumbers();