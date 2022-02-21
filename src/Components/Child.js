import React, {Component} from 'react';

export default function Child(props){
    return( 
        <div>
            <button onClick={props.text}>Click Me</button>
        </div>
    )
}