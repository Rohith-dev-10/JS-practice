// primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scorevalue = 100.3

const isLoggedIn = true
const outsideTemp = null
let userEmail;

const id = Symbol('123')

const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 1234567890n



// reference (Non primitive)

//Array, Objects, Functions


const heros = ["rohith", "rakesh", "uppunuthula"]

let myObj = {
    name: "rohith",
    age: 22
}

const myfunction = function(){
    console.log("hello world");
    
}

console.log(myfunction);


console.log(typeof bigNumber);

//Stack(primitive) and Heap memory(Non-primitive)

let myYoutubeName = "Rohith Uppunuthula"

let anotherName = myYoutubeName
anotherName = "Chai aur code"
console.log(anotherName);
console.log(myYoutubeName);


let userOne = {
    email: "user@gmail.com",
    upi:"xyz@ybl"
}

let userTwo = userOne

userTwo.email = "hitesh@gmai.com"

console.log(userOne);
console.log(userTwo);



