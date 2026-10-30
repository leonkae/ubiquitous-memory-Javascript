console.log("Hello world")

let product = "Burger"
let price = 850

console.log(product)
console.log(price)
console.log("Product : " , product, "Price : ", price )
// a string operation called string interpolation
console.log(`You bought a ${product} and the price is ${price}`)

// Variable declarators are 
// const , var , let

let number = 123
let string = "abcdefg"
let character = "a"
let array = ["collection", 123 , true]
let boolean = true
let boolean_2 = false
let address = null

// console methods
console.log("prints logs on the terminal and the console")
console.error("print error on the terminal and console")
console.warn("Check your input (warning)")
console.table([
    {name : "Fidel", status : "absent" , apologies : "none"},
    {name : "Mark", status : "present", apologies : 1},
    {name : "Richard", status : "present", apologies : null},
])

// Arithmetic operators: 

//  + addition
//  - subtraction
//  * multiplication
//  / division
//  % modulus
//  ** Exponentiation

const mealPrice = 800
const quantity = 3
const deliveryFee = 150

const subtotal = mealPrice * quantity
const total = subtotal + deliveryFee

console.log("subtotal: " , subtotal)
console.log("Total: ",  total)

// Assignment operators
//  = assignment
//  += addition assignment
//  -= subtraction assignment
//  *= multiplication assignment
//  /= division assignment
//  %= modulus assignment
//  **= exponentiation assignment

let myMath = 100
console.log(`myMath original ${myMath}`)
myMath += 50
console.log(`myMath + 50 : ${myMath} `)
myMath -= 83
console.log(`my math - 83 : ${myMath}`)
myMath *= 830
console.log(`my math * 830 : ${myMath}`)
myMath /= 83
console.log(`my math / 83 : ${myMath}`)
myMath %= 83
console.log(`my math % 83 : ${myMath}`)
myMath **= 45
console.log(`my math ** 45 : ${myMath}`)

// Comparison operators
//  == equal to
//  === equal value and equal type
//  != not equal to
//  !== not equal value or not equal type
//  > greater than
//  < less than
//  >= greater than or equal to
//  <= less than or equal to


let num = 10
let numTwo = "10"
console.log(num === numTwo)

let ex = 2
let exTwo = 4
console.log(ex > exTwo)

// Logical or boolean operators
//  && logical and
//  || logical or
//  ! logical not

const isLoggedIn = false
const hasPaid = false

if(isLoggedIn && hasPaid){
    console.log("Good stuff")
}

// String operators

// Concatatenation 
// + operator to join two strings => Concatatenation 

let firstName = "Andre"
let lastName = "Kaeulana"

const fullName = firstName + " " + lastName
console.log(fullName)

// Next string operation is interpolation

const meal = "Burger"
const BPrice = 650

console.log(`The ${meal} costs ksh ${price}.`)

console.log("5" + 2)
console.log("5" - 2)
console.log("2" / 2)


// Functions

// methods eg console.log()

// ================================
let aOne = 3
let bOne = 4

function add(){
    return aOne + bOne
}

console.log(add())


// =================================
function addTwo(aTwo, bTwo){
    return aTwo + bTwo
}

console.log(addTwo(34,45))
console.log(addTwo(324,45))
console.log(addTwo(34,4675))
console.log(addTwo(3423,45))
console.log(addTwo(134,45))
console.log(addTwo(34,4345))
console.log(addTwo(134,450))