 export default function Button()  
{
    function call()
    {
        alert("Button is Clicked");
    }
    // return "Hello " + props.name;
    return <div>
        <input type = "text"></input>
       <button type = "submit" onClick={call}> Click</button>
       
    </div>
}