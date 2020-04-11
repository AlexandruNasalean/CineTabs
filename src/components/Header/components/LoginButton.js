import React, { Component } from "react";


export class LoginButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            color: "yellow"
        };
    }
    changeColor() {
        console.log("your color has changed")
        this.setState({
            color: "red"
        })
    }
    render(){
        return(
            <div>
                <button onClick= {this.changeColor.bind(this)} 
                style={{background: this.state.color}}>Login</button>
            </div>
        )
    }
}
