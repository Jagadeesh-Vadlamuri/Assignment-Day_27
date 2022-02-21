import React, {Component} from 'react';
import Child from './Child';

export default class Parent extends Component{
    constructor(props){
        super(props);
        this.state = {
            msg : 'This is an example'
        }
        this.textProduce = this.textProduce.bind(this);
        this.sample = this.sample.bind(this);
    }

    textProduce(){
        alert(`Hello, ${this.state.msg}`)
    }

    sample(){
        this.setState({
            msg: 'This is different'
        })
    }

    render(){
        return(
            <div>  
                <div>{this.state.msg}</div>
                <Child text={this.textProduce} ushh={this.sample}/>
            </div>
        )
    }

}