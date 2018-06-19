console.log();

let passwordInput = document.forms.login.password;
let emailInput = document.forms.login.email;
let myPTag = document.querySelector('#data_binding');
let submit = document.forms.login.submitBtn;
document.addEventListener('keyup', e =>{
  myPTag.textContent = e.target.value;
});
submit.addEventListener('click', e => {

if(passwordInput.value === '' || emailInput.value === ''){
  e.preventDefault();
}
})
console.log(e.target.keyCode);

//attempt to implement 2-way data binding by 1. inside your event listener, get the value your user is typing into your email input 2. using that value populate the p tag with that text.

let user = {
  name: "Henry",
  password: 12345,
  status: "active"
};
let guest = {
  name: "Guest",
  password: undefined,
  status: "inactive"
}

let newScope = {
  name: "Peter Piper",
  password: "bag o peppers",
  instrument: "Pipes",
  context: logMyName
};

newScope.context("Fly away");//IMPLICIT BINDING

function logMyName(greeting){ //variable definition
console.log(this.name, this.password);
alert('${string}, ${this.name}!');

}

logMyName.call(user, "Hello"); // this is the call site
logMyName.call(guest, "Sign Up");//EXPLICIT BINDING






let classScore = 90;
const scopeOne = {
  classScore: 75,
  scopeTwo: {
    classScore: 50
  }
};

console.log(classScore);
console.log(scopeOne.classScore);
console.log(scopeOne.scopeTwo.classScore);
