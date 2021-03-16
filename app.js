const chalk = require('chalk')
const getNotes = require("./notes.js") // getting notes.js file 

const msg = getNotes()
console.log(msg)

console.log(chalk.green("Success!"))
console.log(chalk.bold("Maleeha Bhuiyan"))
console.log(chalk.inverse("This is chalk in inverse"))


/*
Challenge: Use chalk library in your project 
1. Install version 2.4.1 of chalk 
2. Load chalk into app.js
3. Use it to print the string "Success!" to the console in green 
4. Test your work 
//BONUS: Use docs to mess around with other styles. Make text bold and inversed 
*/

