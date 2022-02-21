import React, {Component} from 'react';

class Count extends Component{
    constructor(){
        super();
        this.state = {
            counter : 0
        }
    }

    Increment(){
        this.setState((pstate) => ({
            counter: pstate.counter + 5 
        }), () => (console.log(this.state.counter)))
        
    }

    Nani(){
        this.Increment()
        this.Increment()
        this.Increment()
    }

    render() {
        return (
            <div>
                <h1>Count - {this.state.counter}</h1>
                <button onClick={() => {this.Nani()}}>Increase</button>
            </div>
        )
    }
}

export default Count