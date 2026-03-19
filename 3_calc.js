//  3) Write a function calculate to perform addition of numbers  from given string 
//    let d = '12345678as'  in calc.js file 

// and call that calculate function from main.js file 


export function check()
{
    let a = '12345678as';
    let sum = 0;
    for( var i = 0; i < a.length; i++)
    {
        if(!isNaN(a[i]))
            sum += parseInt(a[i]);
    }
    console.log("Addition is: " +sum);
}