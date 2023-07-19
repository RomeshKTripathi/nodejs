const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, 'CRUD');
const filePath = `${dirPath}/CRUD.txt`;
// creating new file
// fs.writeFileSync(`${dirPath}/CRUD.txt`, 'something');

// reading file
// fs.readFile(filePath, "utf8", (err, item) =>{
//     console.log(item);
// })

// update file
// fs.appendFile(filePath, ' New appended text', (err)=>{
//     if(!err) console.log("file updated successfully")
// })

// rename file
// fs.rename(filePath, `${dirPath}/renamed.txt`, (err)=>{
//     if(!err)console.log("File Renamed successfully");
// })

// delete file
fs.unlinkSync(`${dirPath}/renamed.txt`);