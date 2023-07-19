const fs = require('fs')
const colors = require('colors')

const data = process.argv;
if(data[2] == 'add'){
    fs.writeFileSync(data[3], data[4])
    console.log(`file ${data[3]} added successfully`.green)
}else if(data[2] == 'remove'){
    fs.unlinkSync(data[3])
    console.log(`file ${data[3]} removed successfully`.green)
}else{
    console.log("invalid filename/command".red)
}