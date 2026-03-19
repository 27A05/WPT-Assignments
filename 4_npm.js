// 4) understand npm init , npm install , 
// npm install express 

// in package.json file add start parameter in script 

// and check npm start command 

import express from 'express';

const app = express();

app.get("/", (req, res) => {
    res.send("Server Running");
});

app.listen(3000, () => {
    console.log("Server startedcon port 3000");
});