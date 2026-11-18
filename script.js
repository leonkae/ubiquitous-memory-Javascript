console.log("Hello world");

let product = "Burger";
let price = 850;

console.log(product);
console.log(price);
console.log("Product : ", product, "Price : ", price);
// a string operation called string interpolation
console.log(`You bought a ${product} and the price is ${price}`);

// Variable declarators are
// const , var , let

let number = 123;
let string = "abcdefg";
let character = "a";
let array = ["collection", 123, true];
let boolean = true;
let boolean_2 = false;
let address = null;

// console methods
console.log("prints logs on the terminal and the console");
console.error("print error on the terminal and console");
console.warn("Check your input (warning)");
console.table([
  { name: "Fidel", status: "absent", apologies: "none" },
  { name: "Mark", status: "present", apologies: 1 },
  { name: "Richard", status: "present", apologies: null },
]);

// Arithmetic operators:

//  + addition
//  - subtraction
//  * multiplication
//  / division
//  % modulus
//  ** Exponentiation

const mealPrice = 800;
const quantity = 3;
const deliveryFee = 150;

const subtotal = mealPrice * quantity;
const total = subtotal + deliveryFee;

console.log("subtotal: ", subtotal);
console.log("Total: ", total);

// Assignment operators
//  = assignment
//  += addition assignment
//  -= subtraction assignment
//  *= multiplication assignment
//  /= division assignment
//  %= modulus assignment
//  **= exponentiation assignment

let myMath = 100;
console.log(`myMath original ${myMath}`);
myMath += 50;
console.log(`myMath + 50 : ${myMath} `);
myMath -= 83;
console.log(`my math - 83 : ${myMath}`);
myMath *= 830;
console.log(`my math * 830 : ${myMath}`);
myMath /= 83;
console.log(`my math / 83 : ${myMath}`);
myMath %= 83;
console.log(`my math % 83 : ${myMath}`);
myMath **= 45;
console.log(`my math ** 45 : ${myMath}`);

// Comparison operators
//  == equal to
//  === equal value and equal type
//  != not equal to
//  !== not equal value or not equal type
//  > greater than
//  < less than
//  >= greater than or equal to
//  <= less than or equal to

let num = 10;
let numTwo = "10";
console.log(num === numTwo);

let ex = 2;
let exTwo = 4;
console.log(ex > exTwo);

// Logical or boolean operators
//  && logical and
//  || logical or
//  ! logical not

const isLoggedIn = false;
const hasPaid = false;

if (isLoggedIn && hasPaid) {
  console.log("Good stuff");
}

// String operators

// Concatatenation
// + operator to join two strings => Concatatenation

let firstName = "Andre";
let lastName = "Kaeulana";

const fullName = firstName + " " + lastName;
console.log(fullName);

// Next string operation is interpolation

const meal = "Burger";
const BPrice = 650;

console.log(`The ${meal} costs ksh ${price}.`);

console.log("5" + 2);
console.log("5" - 2);
console.log("2" / 2);

// Functions

// methods eg console.log()

// ================================
let aOne = 3;
let bOne = 4;

function add() {
  return aOne + bOne;
}

console.log(add());

// =================================
function addTwo(aTwo, bTwo) {
  return aTwo + bTwo;
}

console.log(addTwo(34, 45));
console.log(addTwo(324, 45));
console.log(addTwo(34, 4675));
console.log(addTwo(3423, 45));
console.log(addTwo(134, 45));
console.log(addTwo(34, 4345));
console.log(addTwo(134, 450));

// let pilotBadge = false

// // if(pilotBadge === true){
// //     console.log("Access granted")
// // } else {
// //     console.log(" State ? State property ? Nuhhh... hit the road dude")
// // }

// if(pilotBadge === true){
//     console.log("Access granted")
// } else if (pilotLicense === true) {
//     console.log(" State ? State property ? Nuhhh... hit the road dude")
// }

let pilotBadge = false;
let pilotLicense = true;

function checkPilotAccess(pilotBadge, pilotLicense) {
  if (pilotBadge === true) {
    console.log("Access granted");
  } else if (pilotLicense === true) {
    console.log("pilot license seen");
  } else {
    console.log("Access denied , no badge no license");
  }
}

checkPilotAccess(pilotBadge, pilotLicense);

const orderStatus = "preparing";

switch (orderStatus) {
  case "pending":
    console.log("Waiting for confirmation");
    break;

  case "preparing":
    console.log("Kitchen preping");
    break;

  case "delivered":
    console.log("meal arrived");
    break;

  default:
    console.log("unknown order status");
}


let count = 1

while(count <= 5){
    console.log(count)
    count++
}

let n = 1

do {
    console.log(n)
    n++
} while (n <= 10)


for(let i = 1; i <= 5 ; i++){
    console.log(i)
}

const student = {
    name : "Ejaz",
    age : 45,
    course : "Ai development"
}

// for in 
for (const key in student){
    console.log(key, student[key])
}

const meals = ["gima", "meat", "fish"]

// for of

for (const meal of meals){
    console.log(meal)
}

for (let x = 1; x <= 10; x++){
  if(x === 5){
    break
  }
  console.log(x)
}

// Array

const students = ["agem", "richard", "ejaz", "alphonce", "jenifer"]

console.log(students)
console.log(students[0])
console.log(students[1])
console.log(students.length)

students.push("mark")

console.log(students)

students.unshift("braxton")

console.log(students)

students.pop()

console.log(students)

students.shift()

console.log(students)

students.forEach((students, index) => {
  console.log(`${index + 1}. ${students}`)
})

// objects

const person = {
  name : "Agem",
  age : 26,
  occupation : "pilot",
  height : 5.11,
  date_of_birth : "1st Nov 2000",
  greet(){
    return `my name is ${this.name} and i am a ${this.occupation}`
  }
}

console.log(person)
console.log(person.greet())
// dot notation
console.log(person.name)
console.log(person.age)
// bracket notation
console.log(person["occupation"])

person.special_needs = false

console.log(person)

person.occupation = "pilot in command"

console.log(person)

delete person.date_of_birth
console.log(person)

// put everything together

const cart = [
  {name : "Burger", price: 850},
  {name : "Milk shake", price: 550},
  {name : "Wings", price: 1100},
]

function calculateOrderTotal(order, quantity){
  if (quantity <= 0){
    return 0
  }

  return order.price * quantity
}

for (const order of cart ){
  console.log (`${order.name} : Ksh ${order.price}`)
}

const selectedItem = cart[0]
const nQuantity = 2;

const nTotal = calculateOrderTotal(selectedItem, nQuantity)

console.log(`Your total is Ksh ${nTotal}`)

