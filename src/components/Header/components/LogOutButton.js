import React, { Component } from "react";
import "./LogOutButton.css";

export class LogOutButton extends React.Component {
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
                <button className="LogOutButton" onClick= {this.changeColor.bind(this)} 
                style={{background: this.state.color}}>LogOut</button>
            </div>
        )
    }
}
