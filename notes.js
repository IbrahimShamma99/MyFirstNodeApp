const fs = require('fs')

const getnotes = () => {

    return "Notes ?! ... Nigga "
}



const addnote = (title,body) => {
    const notes = loadnotes()
    const duplicate = notes.find((note)=>{
        return title === note.title
    })

    debugger

    if (!duplicate){
    notes.push({
        title:title,
        body:body
    })
    savenotes(notes)
    console.log("note added")
}
    else {
        
    }

}
    
const savenotes = (notes) =>{
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)


}

const loadnotes = () =>{
    try{
    const databuffer = fs.readFileSync('notes.json')
    const dataJSON = databuffer.toString()
    const data = JSON.parse(dataJSON)
    return data}
    catch(e){return [] } 
}


const removenote = (title,body) => {
    const notes = loadnotes()
    notes.pop({
        title:title,
        body:body
    })

    savenotes(notes)
    console.log("note deleted")
}

const listnote = () => {
    const notes = loadnotes()
    console.log(notes)

}

const readnote = (title) => {
    const notes = loadnotes()

    const macgee = notes.filter((note) =>{
        if (note.title === title){
            console.log(note.body)
        }
    })

}




module.exports = {
    getnotes:getnotes,
    addnote:addnote,
    removenote:removenote,
    listnote:listnote,
    readnote:readnote
}
