import React, {Component} from "react";
import { Card, ListGroup, ListGroupItem, Form, Button } from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import "./SignUp.css";
// import { ReactComponent } from "*.svg";




// export class SignUp extends Component {
    
//     render() {
//         return (
//             <div class="signUpBody">
//                 <div class="title">
//                 <h1> 
//                 CREATE ACCOUNT
//                 </h1>
//                 <tr id="UserIcon"><FontAwesomeIcon icon={faUserPlus} /></tr>
//                 </div>
//                 <div>
//                 <form class="signUpForm">
//     <div class="form-group">
//     <label for="exampleInputEmail1">Email address</label>
//     <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
//     </div>
//     <div class="form-group">
//     <label for="exampleInputPassword1">Password</label>
//     <input type="password" class="form-control" id="exampleInputPassword1" />
//     <small id="passwordHelpBlock" class="form-text text-muted">
//     Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters.
//     </small>
//     </div>
//     <button type="submit" class="btn btn-primary" onClick={ () => this.postData() }>Sign Up</button>
// </form>
//                 </div>
               
           
//             </div>
          
//         )
//     }
// }

 export class  SignUp extends Component {
     constructor(props){
         super(props)

         this.state={
            username: '',
            password: '',
            
         }
     }
    
     changeHandler = (e) => {
         this.setState({ [e.target.name]: e.target.value })
     }
     submitHandler = (e) => {
         e.preventDefault()
         console.log(this.state)
         const Url=`http://movies-api-siit.herokuapp.com/auth/register?username=${this.state.username}&password=${this.state.password}`;
         console.log(Url);
         Method:POST
         Path:​/auth/login
         Payload:​​{
             username: this.state.username,
             password : this.state.password,
            }
         
         
         
     }
    render() {
        const { username, password, body } = this.state
        return (  
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input type="text" name="username"  value={ username } onChange={ this.changeHandler}/>
                    </div>
                    <div>
                        <input type="text" name="password" value={ password } onChange={ this.changeHandler}/>
                    </div>
                    <button type="submit">submit</button>
                </form>
            </div>
        );
    }
}
 