// Day 5 Work

const products = [["blanket", 12.99, "Best damm blanket"],["rattle", 4.99, "It rattles good"],["diapers", 12.99, "They're the shit."]];
console.log(products[2][2]);

let i = 0; //control statement, where it starts. If we don't completely understand loops, as long as we get the control statement, parameters, and Incrementor, we'll be good.

while (i < products.length){ //parameters that must be true, otherwise it'll crash your browser, what it'll do. This actually pulls the first two items.
  console.log(products[i]);
  // console.log(i, 'inside the loop because it is following the < command')
  i++; //Incrementor, without this, the statement will never become true. We must tell it to increase by one. When it'll end.
}

console.log(i);

for (let i = 0;/*Control Statement*/ i < products.length /*parameters*/; i++/*Incrementor*/){ //This is the same exact functionality as a while loop, except everything is condensed. As long as we know the control statement, parameters, and Incrementor, we'll be fine!

}


//while loops
let i = 0;
let newProduct = ["Squeaky Toy", 19.99, "Really good toy!"];
do {
  //Add newProduct to the second member of products array
  i++;
} while(i < products.length);

//console.log(products);

products.forEach((product) => {
  console.log(product);
});


for (let i = 0;/*Control Statement*/ i < products.length /*parameters*/; i++/*Incrementor*/){ //This is the same exact functionality as a while loop, except everything is condensed. As long as we know the control statement, parameters, and Incrementor, we'll be fine!


//make the above statement in reverse
for(let i = products.length -1; i >= 0;
i--) {
  console.log(products[i]);
}

//turn this for loop above into a forEach loop
{i.forEach(function(i)
{
  copy.push(i)
});


//FUNCTIONS
//Take a piece of code and set it aside so that you can call it in an 'if' statement whenever you want
//Usually when you put stuff inside of parentheses you have a function, the stuff inside parentheses being the input
console.log("hello word");
array.pop();
function capitalCase(string){
  return string.toUpperCase();
};
//arguments in a function have NO value until the function is called

let newString = capitalCase("peter piper"); //function call
console.log(newString);
let capsName = capitalCase("captain america");
console.log(capsName);

function capitalCase(string){
  let words string.split(' ');
  words.forEach(word => {
      let letters = word.split('');
      let capped = letters[0].toUpperCase();
      letters.splice(0, 1, capped);
  });
  return words.join(' ');
};

//Another example of function
function(stuff) {//anonymous function
  console.log(stuff)
};

//Function Declarations ARE hoisted, Function Expressions ARE NOt, below WONT get hoisted, the one 2 down WILL
var myCoolFunction = function(stuff){
  console.log(stuff)
};

function myCoolFunction(stuff){
  console.log(stuff)
};


//Arrow FUNCTIONS also called fat arrow functions
let myCoolFunction = function(stuff) => {
  console.log(stuff)
};



//Write a function that calculates a dog's age.  It should accept age of dog in years, return age of dog using conversion 1 human year to 7 dog years, and alert the answer
function ageDog(years){
  if(!isNan(years)) return years * 7;
} else {
  ageDog(parseInt(prompt("How old is your dog in years", "3")))
}
};
alert(ageDog(parseInt(prompt("How old is your dog in years?", "3")));


//Write a function that will calculate a "lifetime supply" will be for any product.  Accept 2 arguments (age of person now, amount of product per day), calculate the supply needed for the rest of the user's life based on max age of 80, alert the answer in this format "you will need x to last you until you're y."
function agePerson(years), dailyProduct(amount){
  return (80 - years) * amount * 365;
};
alert(agePerson(parseInt(prompt("You will need "))));
