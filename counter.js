import { Component } from "react";

export default class Counter extends Component
{
    constructor()
    {
        super();
        this.state = {count: 0};
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment()
    {
        this.setState(prevState => ({
            count: prevState.count+1
        }));
    }

    decrement()
    {
        this.setState(prevState => ({
            count: prevState.count-1
        }));
    }

    render()
    {
        return(
            <div>
                <h1> Counter Application</h1>
                <p>Current Count: {this.state.count}</p>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
            </div>
        );
    }

}