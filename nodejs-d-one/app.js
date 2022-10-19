// GLOBALS -NO WINDOW !!!!! 
// __dirname - path to current directory
// __filename - file name
// require - function to use modules (CommonJS)
// module - info about current module(file)
// process - info about env where the program is being executed

// console.log(__dirname);
// // setInterval(() => {
// //     console.log('Hello World');
// // }, 1000)
// console.log(process);
// const data = () => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.text())
//     .then(data => console.log(data))


// }

// data();

const name = require('./4_name');
const sayHi = require('./5_utils');
const data = require('./6-alternative');
require('./7-mide-grenade');
console.log(data);
// sayHi('John');
// sayHi(name.john);
// sayHi(name.peter);

// console.log(name);



