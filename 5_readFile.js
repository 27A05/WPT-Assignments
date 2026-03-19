// 5) create file sample.txt add some data in that file 
//    and read that file in synchronus way as well as asynchronus way

import fs from 'fs';
let data = fs.readFileSync("sample.txt", "utf8");
console.log("Sync Read:");
console.log(data);

fs.readFile("sample.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log("Async Read:");
    console.log(data);
});