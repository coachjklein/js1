let button =
document.querySelector('button');
let div = document.querySelector('div');
  const body =
  document.querySelector('body');
button.addEventListenter('click', e =>{
  e.target.textContent = "Goodbye cats!";
});

div.innerHTML = "<p>lorem ipsum dolores cantu!</p>";
// DONT use innerHTML it can allow hackers to add scripts to your code

let newH1 = document.createElement('h1');
  console.log(newH1);
  newH1.textContent = "Log in here!";
  console.log(newH1);
// First option to add it to the very end, next option adds it to the beginning  body.appendChild(newH1);
  newH1.className = "text-center";
  body.insertBefore(newH1, div);

  div.id = "red_text";

div.classlist.add('text-center');

div.addEventListener('click', e => {
  // first option to remove this class 2nd option below toggle does it for you with div.classlist.remove('text-center');
  div.classlist.toggle('text-center');
  console.log(div.classlist.contains('text-center'));
  div.classList.replace('blue-background', 'green-background');
});

myImg = document.createElement('img');
myImg.setAttribute('src', 'https://www.pexels.com/search/beach/');
div.appendChild(myImg);
console.log(myImg);






//
