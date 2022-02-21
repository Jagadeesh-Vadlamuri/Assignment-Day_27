import React, { Component } from 'react'

class RegComponent extends Component {
  render() {
    console.log('Regular Component')
    return (
      <div>
        <p>Regular Component</p>
        <h2>Count - {this.props.sample}</h2>
      </div>
    )
  }
}

export default RegComponent