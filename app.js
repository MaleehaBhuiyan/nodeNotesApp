const validator = require('validator') // getting npm package name 
const getNotes = require("./notes.js") // getting notes.js file 

const msg = getNotes()
console.log(msg)

console.log(validator.isURL('www.google.'))


