import React, { Component } from 'react'
import RegComponent from './RegComponent';
import PureComp from './PureComponent';

class ParentComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({
                count: this.state.count + 1
            })
        }, 1000)
    }
    
  render() {
    console.log('******Parent Component******')
    return (
      <div>
          <RegComponent sample={this.state.count}/>
          <PureComp sample={this.state.count}/>
      </div>
    )
  }
}

export default ParentComponent