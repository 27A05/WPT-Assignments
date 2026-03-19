
// 3)  
//  by using http module create server and run on port numer  - 5050 

//   create api  /
// 	   /index   --- > display <index page> on browser 
//                     /home --- > display <Home Page> on browser 

// 	/aboutus --> display <About US> using post method 

// hint  - use postman for post method 


const http = require("http");

const server = http.createServer((req, res) => {
    if(req.url === "/index" && req.method === "GET")
    {
        res.write("Index Page\n");
        res.write("Index Page\n");
        res.write("Index Page");
        res.end();
    }
    else if(req.url === "/home" && req.method === "GET")
    {
        res.write("Home Page");
        res.end();
    }
    else if(req.url === "/aboutus" && req.method === "POST")
    {
        res.write("About Us");
        res.end();
    }
    else
    {
        res.write("Page Not Found");
        res.end();
    }
});

server.listen(5050, () => {
    console.log("Server running on port 5050");
});