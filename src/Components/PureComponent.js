import React, { PureComponent } from "react";

class PureComp extends PureComponent {
  render() {
    console.log("Pure Component");
    return (
      <div>
        <p>Pure Component</p>
        <h2>Count - {this.props.sample}</h2>
      </div>
    );
  }
}

export default PureComp;
