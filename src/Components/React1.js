import React, {Component} from 'react';

class React1 extends Component{
    constructor(){
        super();
        this.state = {
            msg : 'Hi, My name is Jagadeesh'
        }
    }

    changeText(){
        this.setState({
            msg : 'Thanks'
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.msg}</h1>
                <button onClick={() => {this.changeText()}}>Click me</button>
            </div>
        )
    }
}

export default React1