import React, { Component } from "react";
import {Form} from "react-bootstrap";

export class GenreFilter extends Component {

  render() { 
    const {CheckBoxChangeHandler} = this.props;
  
    return (  
      <div className="Genre-Filter">
        <label>Genres</label>
      {['checkbox'].map((type) => (
      <div key={`inline-${type}`} className="mb-3" id="genre-filter">
          <Form.Check inline label="Comedy" name="Comedy" value="Comedy" onClick={CheckBoxChangeHandler}/>
          <Form.Check inline label="Action" name="Action" value="Action" onClick={CheckBoxChangeHandler}/>
          <Form.Check inline label="Adventure" name="Adventure" value="Adventure" onClick={CheckBoxChangeHandler}/>
          <Form.Check inline label="Family" name="Family" value="Family" onClick={CheckBoxChangeHandler}/>
          <Form.Check inline label="History" name="History" value="History" onClick={CheckBoxChangeHandler}/>
          <Form.Check inline label="Mystery" name="Mystery" value="Mystery" onClick={CheckBoxChangeHandler}/>
          <Form.Check inline label="Sci-Fi" name="Sci-Fi" value="Sci-Fi" onClick={CheckBoxChangeHandler}/>
          <Form.Check inline label="War" name="War" value="War" onClick={CheckBoxChangeHandler}/>
          <Form.Check inline label="Crime" name="Crime" value="Crime" onClick={CheckBoxChangeHandler}/>
          <Form.Check inline label="Fantasy" name="Fantasy" value="Fantasy" onClick={CheckBoxChangeHandler}/>
          <Form.Check inline label="Horror" name="Horror" value="Horror" onClick={CheckBoxChangeHandler}/>
          <Form.Check inline label="Sport" name="Sport" value="Sport" onClick={CheckBoxChangeHandler}/>
          <Form.Check inline label="Western" name="Western" value="Western" onClick={CheckBoxChangeHandler}/>
          <Form.Check inline label="Animation" name="Animation" value="Animation" onClick={CheckBoxChangeHandler}/>
          <Form.Check inline label="Documentary" name="Documentary" value="Documentary" onClick={CheckBoxChangeHandler}/>
          <Form.Check inline label="Drama	" name="Drama	" value="Drama	" onClick={CheckBoxChangeHandler}/>
          <Form.Check inline label="Romance" name="Romance" value="Romance" onClick={CheckBoxChangeHandler}/>
          <Form.Check inline label="Thriller" name="Thriller" value="Thriller" onClick={CheckBoxChangeHandler}/>
      </div>
      ))}
</div>
    );
  }
}
