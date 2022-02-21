import React, { Component } from 'react'
import './StyleSheet.css';

class StyleSheet extends Component {
    constructor(){
        super();
        this.state = {
            fname : 'Jagadeesh',
            lname : 'Vadlamuri'
        }

        this.rise = this.rise.bind(this)
    }

    rise(){
        this.setState({
            fname: 'Navya',
            lname: 'Marisetti',
            style:{Color : 'black'}
        })
    }

  render() {
    return (
      <div>
          <h1 className='primary'>{`${this.state.fname} ${this.state.lname}`}</h1>
          <button onClick={this.rise}>Click Me</button>
      </div>
    )
  }
}

export default StyleSheet