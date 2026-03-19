import fs from 'fs';

fs.mkdirSync("testFolder");

if(fs.existsSync("testFolder")) {
    console.log("Directory Exists");
}

let files = fs.readdirSync(",");
console.log(files);

fs.mkdirSync("testFolder");
console.log("Directory removed");