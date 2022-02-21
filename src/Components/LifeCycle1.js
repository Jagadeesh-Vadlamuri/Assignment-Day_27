import React, { Component } from 'react'
import LifeCycle2 from './LifeCycle2';

class LifeCycle1 extends Component {
    constructor(){
        super();
        console.log('LifeCycle1 Constructor')
    }

    componentDidMount(){
        console.log('LifeCycle1 componentDidMount')
    }

    static getDerivedStateFromProps(props, state){
        console.log('LifeCycle1 getDerivedStateFromProps')
        return null;
    }

  render() {
      console.log('LifeCycle1 render')
    return (
      <div>
          <LifeCycle2 />
          <div>LifeCycle1</div>
      </div>
      
    )
  }
}

export default LifeCycle1