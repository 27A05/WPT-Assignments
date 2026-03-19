const axios = require("axios");

axios.get("https://jsonplaceholder.typecode/users")
.then(response => {
    console.log("API Data:");
    console.log(response.data);
})
.catch(error => {
    console.log(error);
});