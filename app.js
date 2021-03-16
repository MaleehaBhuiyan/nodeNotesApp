const chalk = require('chalk')
const getNotes = require("./notes.js") // getting notes.js file 

const command = process.argv[2]

if(command === 'add'){
    console.log('Adding Note')
} else if (command === 'remove'){
    console.log("Removing Note")
}

console.log(process.argv)

