// const fs = require('fs')
// const jaws = require('./utils')
const notes = require('./notes')
// const validator = require('validator')
// const chalk = require('chalk');
const yargs = require('yargs')

    // const addnote = notes.addnote()
    // const getnotes = notes.getnotes()

yargs.version("1.1.0")

yargs.command({
    command:'add',
    describe:"add new note",
    builder:{
        title:{
            describe:"note title",
            demandOption:true,
            type:"string"
        },
        body:{
            describe:"note body",
            demandOption:true,
            type:"string"
        }

    },
    handler : (argv) =>{
    notes.addnote(argv.title,argv.body )        

    }

})

yargs.command({
    command:'remove',
    describe:"remove note",
    builder:{
        title:{
            describe:"note title",
            demandOption:true,
            type:"string"
        },
        body:{
            describe:"note body",
            demandOption:false,
            type:"string"
        }},
    handler:(argv)=>{
        notes.removenote(argv.title)        

        }    
})

yargs.command({
    command:'read',
    describe:"read note",
    builder:{
        title:{
            describe:"note title",
            demandOption:true,
            type:"string"
        }},
    handler:(argv)=>{
        notes.readnote(argv.title)
    }
})

yargs.command({
    command:'list',
    describe:"list note",
    handler:()=>{
        notes.listnote()
    }
})


console.log(yargs.argv)


