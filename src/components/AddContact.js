import React from "react";
import { Form, Checkbox, Button } from 'semantic-ui-react';

class AddContact extends React.Component {

  state = 
  {
    name: "",
    email: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("all fields have to be filled");
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({ name: "", email: "" });
  };


  render() {
    return (
      <div className="ui main" style={{marginTop : "60px" }}>
        <h2>Add Contact</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Name</label>
            <input type = "text" placeholder="name" value = {this.state.name} onChange={(e)=> this.setState({name : e.target.value})}></input>
            
          </div>
          <div className="field">
          <label>Email</label>
            <input type = "email" placeholder="email" value = {this.state.email} onChange={(e)=> this.setState({email : e.target.value})}></input>
          </div>

          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}

export default AddContact;
