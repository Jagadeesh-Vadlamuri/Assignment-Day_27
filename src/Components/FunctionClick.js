import  React, {Component} from 'react';

export default function FunctionClick() {
    const Display = () => (
        console.log("Jags")
    )
    return (
        <div>
            <input type="text" onKeyUp={Display} />
        </div>
    )
}