// 1) accept command line args in node js 
//    and display addition of even numbers from that 

let argv = process.argv.slice(2);

let sum = 0;

//console.log(process.argv);

for(let i = 0; i < argv.length; i++)
{
    let num = parseInt(argv[i]);
    if(num % 2 === 0)
    {
        sum += num;
    }
}

console.log("Sum of even numbers:", sum);