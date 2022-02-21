import React, { Component } from "react";

export class Forms extends Component {
  constructor() {
    super();
    this.state = {
      firstname: "",
      lastname: "",
    };
    this.changeFirstname = this.changeFirstname.bind(this);
  }

  changeFirstname = (e) => {
    this.setState({
      firstname: e.target.value,
    });
  };

  changeLastname = (e) => {
    this.setState({
      lastname: e.target.value,
    });
  };

  formSubmit = (e) => {
    alert(`Hello, ${this.state.firstname} ${this.state.lastname}`);
    e.preventDefault();
  };

  changeRange = (e) => {
      prompt('The range has been changed')
  }

  render() {
    return (
      <form onSubmit={this.formSubmit}>
        <div>
          <label>FirstName</label>
          <input
            type="text"
            value={this.state.firstname}
            onChange={this.changeFirstname}
          />
          <br />
          <br />
          <label>LastName</label>
          <input
            type="text"
            value={this.state.lastname}
            onChange={this.changeLastname}
          />
          <br />
          <br />
          <input type="submit" value="Submit"></input>
        </div>
        <br />
        <br />
        <div>
            <input type="range" onChange={this.changeRange}/>
        </div>
      </form>
    );
  }
}

export default Forms;
