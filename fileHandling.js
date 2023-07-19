const { dir } = require('console');
const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, 'files');
console.warn(dirPath)

// creating multiple files

for(i = 0; i < 5; i++){
    fs.writeFileSync(`${dirPath}/file${i}.txt`, `text of file ${i}`)
}
fs.readdir(dirPath, (err, files) => {
    files.forEach((item)=>{
        console.log(item);
    })
})