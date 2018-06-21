// day 10 w Brandy

/*let object1 = {}
let object2 = new Object()

let person = {
  firstname: "vinni",  //[firstname, "vinni"]
  lastname: "hoke",
  age: 28,
  favorites: ["cookies", "pizza"],
  desc: {
    haircolor: "brown",
    eyecolor: "brown"
  }
}

//This is called dot notation
object1.food = "pizza";
console.log(object1);

//This is called bracket notation
object1['color'] = 'blue';
console.log(object1.age);

//There are a few different loops you can access specifically for objects.

//For in
for(let key in person){ //The word key here is a 'let variable'. It can be any value. In an array you have ______, but in objects you always need a key to access.
  //console.log(person[key])
  console.log('key', key)

//for..of
for(let key of Object.keys(person))
console.log(key, value)

letnewObj = Object.create(object1);
newObj.flower = 'rose';
console.log(newObj);
newObj.color = 'yellow';
console.log('newobj', newObj);
console.log('object1', object1);
}

*/

 //day 10 w Ryeker

let recipe = {
  flour: '20 oz',
  eggs: 3,
  vanilla: true,
  rum: 'tons'
};
console.log(recipe);
let clone = Object.create(recipe);
console.log(Object.getPrototypeOf(clone), '<this is the prototype>');


let vehicle = {
  wheels: 4,
  windows: null,
  engineSize: '4 cylinder',
  doors: 4
};

//to turn this into a motorcycle
let motorcyle = Object.create(vehicle);
motorcyle.wheels = 2;

//example from Day10 notes on making a new prototype
let stringExample = new string("hello there");
let arrayExample = new array(["cheese", 94]);
let objectExample = new object({cheeseIsGood: true});
let booleanExample = new boolean(true);
let numberExample = new number(5);
//console.log(stringExample, numberExample, boolExample, arrayExample, objectExample);



// Day 10 notes Constructor functions
function Spaceship(rockets, fluxCapacitor, pilot, blasters, shield, landingGear) {
  this.rockets = rockets;
  this.fluxCapacitor = fluxCapacitor;
  this.pilot = pilot;
  this.blasters = blasters;
  this.shield = shield;
  this.landingGear = landingGear;
};

let firefly = new Spaceship(4, false, 'Mal', Infinity, false, "broken"); //this all pertains to the function Spaceship above for example rockets=4 pilot=Mal etc.
console.log(firefly.blasters);


//EXAMPLE FOR FINAL PROJECT!
function Todo(name, dueDate, status, timeElapsed, peopleWith, tags) {
  this.name = name;
  this.dueDate = dueDate;
  this.status = status;
  this.timeElapsed = timeElapsed;
  this.peopleWith = peopleWith;
  this.tags = tags;
};


//example from day10 notes timers
let advertisement = "Get 40 percent off today!";

setTimeout(
  () => {
  alert(advertisement);
},5000//how long you want to ait for ad to display time in milliseconds 5000=5 seconds
);




let cart = [];
function Product(name, price, description){
  this.name = name;
  this.price = price;
  this.description = description;
};
let soapBtn = document.forms.orderForm.soap;
soapBtn.addEventListener('click', e => {
  e.preventDefault();
  let soap = new Product("soap", 2.99, "makes you clean");
  cart.push(soap);
  localStorage.setItem('soap', JSON.stringify(soap));
});
function getSoap(){
  localStorage.getItem('soap');
  console.log(JSON.parse(storedItem));
};
getSoap();
