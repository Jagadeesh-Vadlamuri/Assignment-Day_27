import React, { Component } from "react";
import RefsClassChild from './RefsClassChild'

class RefsClass extends Component {
    constructor(){
        super();
        this.classRef = React.createRef()
    }

    submitHandler = (e) => {
        this.classRef.current.focus()
        e.preventDefault()
    }

  render() {
    return (
        <div>
            <RefsClassChild ref={this.classRef}/>
            <button type="submit" onClick={this.submitHandler}>Click</button>
        </div> 
    );
  }
}

export default RefsClass;
