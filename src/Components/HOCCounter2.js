import React, { Component } from 'react'

export class HOCCounter2 extends Component {
  render() {
    return (
      <div>
          <h1 onMouseOver={this.clickHandler}>Clicked {this.state.count} times</h1>
      </div>
    )
  }
}

export default HOCCounter2