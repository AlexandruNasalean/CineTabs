import React, { Component } from "react";
import {Form} from "react-bootstrap";

export class GenreFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Genre : [],
        
    };

  }

  CheckBoxChangeHandler = (event) => {
    console.log(event.target.name);
    const Genre = [...this.state.Genre];
    if(Genre.includes(event.target.name)){
      this.setState({
        Genre: Genre.filter(element =>( element !== event.target.name))
      })
    }
    else{
        Genre.push(event.target.name);
      this.setState({
        Genre
      })
    }

  }
  
  render() { 
  
    return (  
      <div className="Genre-Filter">
      {['checkbox'].map((type) => (
      <div key={`inline-${type}`} className="mb-3">
          <Form.Check inline label="Comedy" name="Comedy" value="Comedy" onClick={this.sendData}/>
          <Form.Check inline label="Action" name="Action" value="Action" onClick={this.sendData}/>
          <Form.Check inline label="Adventure" name="Adventure" value="Adventure" onClick={this.CheckBoxChangeHandler}/>
          <Form.Check inline label="Family" name="Family" value="Family" onClick={this.CheckBoxChangeHandler}/>
          <Form.Check inline label="History" name="History" value="History" onClick={this.CheckBoxChangeHandler}/>
          <Form.Check inline label="Mystery" name="Mystery" value="Mystery" onClick={this.CheckBoxChangeHandler}/>
          <Form.Check inline label="Sci-Fi" name="Sci-Fi" value="Sci-Fi" onClick={this.CheckBoxChangeHandler}/>
          <Form.Check inline label="War" name="War" value="War" onClick={this.CheckBoxChangeHandler}/>
          <Form.Check inline label="Crime" name="Crime" value="Crime" onClick={this.CheckBoxChangeHandler}/>
          <Form.Check inline label="Fantasy" name="Fantasy" value="Fantasy" onClick={this.CheckBoxChangeHandler}/>
          <Form.Check inline label="Horror" name="Horror" value="Horror" onClick={this.CheckBoxChangeHandler}/>
          <Form.Check inline label="Sport" name="Sport" value="Sport" onClick={this.CheckBoxChangeHandler}/>
          <Form.Check inline label="Western" name="Western" value="Western" onClick={this.CheckBoxChangeHandler}/>
          <Form.Check inline label="Animation" name="Animation" value="Animation" onClick={this.CheckBoxChangeHandler}/>
          <Form.Check inline label="Documentary" name="Documentary" value="Documentary" onClick={this.CheckBoxChangeHandler}/>
          <Form.Check inline label="Drama	" name="Drama	" value="Drama	" onClick={this.CheckBoxChangeHandler}/>
          <Form.Check inline label="Romance" name="Romance" value="Romance" onClick={this.CheckBoxChangeHandler}/>
          <Form.Check inline label="Thriller" name="Thriller" value="Thriller" onClick={this.CheckBoxChangeHandler}/>
      </div>
      ))}
</div>
    );
  }
}
