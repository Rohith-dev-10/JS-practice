const name = "rohith"
const repoCount = 50
console.log(name + repoCount + "value")

console.log(`Hello My name is ${name} and my repoCount is ${repoCount}`);

const gameName = new String('hiteshhc')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);

console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));

console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4)
console.log(newString);

const AnotherString = gameName.slice(-8,4)
console.log(AnotherString);

const newStringOne = "          hites         "
console.log(newStringOne);
console.log(newStringOne.trim());



const url = "https://google.com/rohith%20uppunuthula"

console.log(url.replace('%20', ''))

console.log(gameName.split("-"));
