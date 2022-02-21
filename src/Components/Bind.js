import React, {Component} from 'react';

export default class Bind extends Component{
    constructor(){
        super();
        this.state = {
            data: 'Hi, this is Jags'
        }

        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler(){
        this.setState({
            data: 'Hi, this is Nani'
        })
    }

    render(){
        return(
            <div>
                {/* <button onClick={() => this.clickHandler()}>Click Here</button> */}
                {/* <button onClick={this.clickHandler.bind(this)}>Click Here</button> */}
                <button onClick={this.clickHandler}>Click Here</button>
                <div>{this.state.data}</div>
            </div>
        )
    }

}