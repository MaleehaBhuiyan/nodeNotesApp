const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
    const notes = loadNotes()

    const duplicateNote = notes.find(note => note.title === title)

    debugger


    if (!duplicateNote){
        notes.push({
            title: title,
            body: body 
        })
    
        saveNotes(notes)
        console.log(chalk.green.inverse("New Note Added"))
    } else {
        console.log(chalk.red.inverse("Note Title Taken"))
    }
}

const removeNote = (title) => {
    const notes = loadNotes()

    const notesToKeep = notes.filter(note => note.title !== title)

    if(notes.length !== notesToKeep.length){
        console.log(chalk.green.inverse("Note Removed!"))
    } else {
        console.log(chalk.red.inverse("No Note Found!"))
    }

    saveNotes(notesToKeep)

}

const listNotes = () => {
    const notes = loadNotes()
    let number = 0 
    notes.forEach(note => {
        number+=1 
        return console.log(chalk.blue.bold( number + ". " + note.title))
    });
}

const readNote = (title) => {
    const notes = loadNotes()

    const findNote = notes.find(note => note.title === title)

    if(findNote){
        console.log(chalk.blue.bold(findNote.title))
        console.log(findNote.body)
    } else {
        console.log(chalk.red.inverse("Note title not found"))
    }

}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () =>  {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}


module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}