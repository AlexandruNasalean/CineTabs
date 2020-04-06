import React, { Component } from "react";


export class LoginButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            color: 'gray'
        };
    }
    changeColor() {
        console.log("your color has changed")
        this.setState({
            color: "silver"
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