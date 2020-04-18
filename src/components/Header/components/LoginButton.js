import React, { Component } from "react";
import "./LoginButton.css";

export class LoginButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            color: "black"
        };
    }
    changeColor() {
        console.log("your color has changed")
        this.setState({
            color: "lightgray"
        })
    }
    render(){
        return(
            <div>
                <button className="LoginButton" onClick= {this.changeColor.bind(this)} 
                style={{background: this.state.color}}>Login</button>
            </div>
        )
    }
}
