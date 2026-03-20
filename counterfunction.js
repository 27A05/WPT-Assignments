// 1) Create Counter Application with Function Component 

import { useState, useEffect} from "react";

export default function Counterfunction()
{
    //let i = 0;
    let [cnt, setcnt] = useState(0);

    function handler()
    {
       // i = i + 1;
        //console.log(i);
        setcnt(cnt++);
    }

    useEffect(() => 
    {
        alert("Every Render")
        console.log("in counter useEffect  every render ")

    });

    useEffect(() => 
   {
        alert("Only Once ")
        console.log("in  useEffect  only once  ")

    }, []);

    useEffect(() => 
    {

        alert("after state change ")

        console.log("in  useEffect  when cnt change   ")

    }, [cnt]);

        return<>
        <h2>Counter Function Component</h2>
        <h3>Count:{cnt}</h3>
        <button name = "btn" value = "Counter" onClick={handler}>Count</button>
        </>

}