import React, {Component} from "react";
import { Card, ListGroup, ListGroupItem, Form, Button } from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import "./SignUp.css";




export class SignUp extends Component {
    render() {
        return (
            <div>
                <div class="title">
                <h1> 
                CREATE ACCOUNT
                </h1>
                <tr id="UserIcon"><FontAwesomeIcon icon={faUserPlus} /></tr>
                </div>
                <div>
              
                </div>
               
           
            </div>
          
        )
    }
}
