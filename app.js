const fs = require('fs') // loading the fs module 

// fs.writeFileSync('notes.txt', 'My name is Maleeha.') // writing notes to a file 

/*
Challenge: Append a message to notes.txt
1. Use appendFileSync to append to the file 
2. Run the script 
3. Check your work by opening the file and viewing the append text 
*/ 

fs.appendFileSync('notes.txt', " I am 21 years old.")