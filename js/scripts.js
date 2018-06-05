/*let inside = true;
  if (inside){
    console.log('i am inside')
  }
  else {
    console.log('i am not inside')
  }
*/
  // let number = 5;

// number > 10 ? "number is greater" : "number isn't greater";

// console.log(number > 10 ? "number is greater" : "number isn't greater")

// let name = false;
// let email = true;

// if (name){
//   alert("I have da name rite 'er")
// }

// else if (email){
//   console.log("Email's right 'er bruv")
// }

// else {
//   console.log("Ain't got nuffin")
// }

// name ? "I have da name rite 'er" : email ? "No email 'er bruv" : "Ain't got nuffin";

// console.log(name ? "I have da name rite 'er" : email ? "Email's right 'er bruv" : "Ain't got nuffin");

/*let money = 10;
let iAmNotHungry = true;

if (iAmHungry) {
  if (money > 10){
    console.log('I am hungry and I have more than 10')
  }
  else {
    console.log('I am hungry and I have less than 10')
  }
} else {
  if (money < 10){
    console.log('I am not hungry and I have more than 10')
  }
  else {
    console.log('I am not hungry and I have less than 10')
  }
}

iAmHungry ? ((money > 10) ? 'I am hungry and I have more than 10' : 'I am hungry and I have less than 10')

iAmHungry ? ((money > 10) ? 'I am not hungry and I have more than 10' : 'I am not hungry and I have less than 10')

console.log(hungry);

let IamWearingYellow = false

IamWearingYellow ? "yes i am wearing yellow" : "no i am not";

let number = 23;
let num = (number = 23 & IamWearingYellow) ? "number =23 and yellow" : "number not 23 and not/or yellow"
console.log(num)
*/



/*let arr = ["javascript", 100, {}, [], true];
//console.log(arr[0];
let favs = ["Rogue One", 51, true, 2004];
console.log(Array.isArray(favs));
console.log(favs);
favs.push("Pizza");
console.log(favs);
//Access the last member of the Array
//Access the second-to-last member of the Array
console.log(favs[favs.length - 1]);
console.log(favs[favs.length - 2]);*/



/*let favs = ["Rogue One", 51, true, 2004];
favs.splice(2);
console.log(favs, "this is the result of splice");//one argument will move that index and everything after.
favs.splice(2, 1)
*/

/*const products = [["blanket", 12.99, "The best blanket around".], ['rattle', 4.99, "It rattles man..."], ['diapers', 9.99, 'Poo catchers']];
alert(products[0][1]);
console.log(products);
*/


//Try It Section on Day 4 Template
let favMovie = ["empire", "vader"];
let secondMovie = ["Return of Jedi", "luke"];
let thirdFav = ["star wars og", "r2d2"];

let favoriteMovies=[];
favoriteMovies.push(favMovie, secondMovie, thirdFav);

let titles = [];
titles.push(favoriteMovies[0][0], favoriteMovies[1][0], favoriteMovies[2][0]);
alert(titles);

let topfive = [];
topfive.shift();
console.log(favoriteMovies[favoriteMovies.length - 1])
console.log(favoriteMovies[favoriteMovies.length - 3])


let character = [];
character.push(favoriteMovies[0][1], favoriteMovies[1][1], favoriteMovies[2][1]);
