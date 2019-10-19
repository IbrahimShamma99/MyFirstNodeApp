const fs = require('fs')
const jaws = require('./utils')
const getnotes = require('./notes')
const validator = require('validator')
const chalk = require('chalk');


console.log(getnotes())

console.log(jaws(5,8))

//To create notes.txt and to write the text
fs.writeFileSync("notes.txt","this file created by nodejs and for node Documents")
//to write on notes.txt 
fs.appendFileSync("notes.txt","\n Ooh Nigga")



const valid1 = validator.isEmail("i.Nigga1fvds0._abushammah@gmafil.com")
const valid2 = validator.isAscii("did you remember me ?")
const valid3 = validator.isURL("remember.com")

console.log("is email valid ? ",valid1)
console.log("is ascii valid ? ",valid2)
console.log("is Url valid ? ",valid3)


console.log(chalk.blue.inverse('Hello world!'));

const error = chalk.bold.red;
const warning = chalk.keyword('orange');
 
console.log(error('Error!'));
console.log(warning('Warning!'));


const command = process.argv[2]

if (command ==='add'){
    console.log("adding note")
}
else if (command ==='remove'){
    console.log("removing note")
}
else {
    console.log("Ooh nigga")
}


