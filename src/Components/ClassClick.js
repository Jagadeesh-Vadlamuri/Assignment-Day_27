import React, {Component} from 'react';

export default class ClassClick extends Component{
    Display(){
        console.log("Navya")
    }
    render(){
        return(
            <button onClick={this.Display}>Navya</button>
        )
    }


}