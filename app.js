const chalk = require('chalk')
const yargs = require('yargs')
const notes = require("./notes.js") // getting notes.js file 


// customize yargs 
yargs.version('1.1.0')

// Create add command 
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {notes.addNote(argv.title, argv.body)}
})

// Create remove command 
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {notes.removeNote(argv.title)}
})

yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: (argv)=> {notes.readNote(argv.title)}
})

yargs.command({
    command: "list",
    describe: "List a note",
    handler: () => {notes.listNotes()}
})

// add, remove, read, list

yargs.parse()



