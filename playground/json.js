const fs = require("fs")

// data = {
//     name:"andrew",
//     planet:"earth",
//     age:27
// }

// const datajson = JSON.stringify(data)

//fs.writeFileSync( "1-json.json" ,datajson)

const filename = "1-json.json"

const Json2Dict = (filename) =>{
const databufferjson = fs.readFileSync(filename)
const databuffer  = databufferjson.toString()
const data = JSON.parse(databuffer)
return data 
}

const data = Json2Dict(filename)

data.name = "ibrahim"
data.planet = "heaven"
data.age = 20

const datajson = JSON.stringify(data)

fs.writeFileSync(filename,datajson)
