import React, {Component} from "react";
import { Card, ListGroup, ListGroupItem, Form, Button } from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import "./SignUp.css";




export class SignUp extends Component {
    render() {
        return (
            <div class="signUpBody">
                <div class="title">
                <h1> 
                CREATE ACCOUNT
                </h1>
                <tr id="UserIcon"><FontAwesomeIcon icon={faUserPlus} /></tr>
                </div>
                <div>
                <form class="signUpForm">
    <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    </div>
    <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" />
    <small id="passwordHelpBlock" class="form-text text-muted">
    Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters.
    </small>
    </div>
    <button type="submit" class="btn btn-primary">Sign Up</button>
</form>
                </div>
               
           
            </div>
          
        )
    }
}
