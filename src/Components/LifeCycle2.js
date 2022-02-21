import React, { Component } from 'react'

export class LifeCycle2 extends Component {
    constructor(){
        super();
        console.log('LideCycle2 Constructor')
    }

    componentDidMount(){
        console.log('LideCycle2 componentDidMount')
    }

    static getDerivedStateFromProps(props, state){
        console.log('LideCycle2 getDerivedStateFromProps')
        return null;
    }

  render() {
      console.log('LideCycle2 render')
    return (
      <div>
          <div>LideCycle2</div>
      </div>
      
    )
  }
}

export default LifeCycle2