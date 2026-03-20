import { Component } from "react";

export default class Login extends Component
{
    constructor()
    {
        super();
        this.msg = "Default Msg"
        this.state = {msg:"Default"}
        this.textHandler = this.textHandler.bind(this);
    }

    btnHandler()
    {
        console.log("btnHandler")
    }

    textHandler(e)
    {
        console.log("textHandler")
        //console.log(e);
        console.log(e.target);
        console.log(e.target.name);
        console.log(e.target.value);
        //this.msg = e.target.value;
        //this.msg = "New msg" + e.target.value;
        this.setState({msg: e.target.value});
    }

    render()
    {
        return <>
        <h1>Login Form</h1>
        User Name<input type = "text" name = "username" onBlur = {this.textHandler}></input>
        Password<input type = "text" name = "password" onBlur = {this.textHandler}></input>
        <input type = "button" value = {"Submit"} onClick = {this.btnHandler}/>
        <p> Data: {this.state.msg}</p>
        </>
    }
}