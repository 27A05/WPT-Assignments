// 1) Write a program to understand async and await mechanism 

const getData = async() =>
{
    let y = await "Hello World";
    console.log(y);
}

async function getData1()
{
    let y = await"Hello Await";
    console.log(y);
    return y;
}

console.log(2);  
getData1();
getData();
console.log(1);