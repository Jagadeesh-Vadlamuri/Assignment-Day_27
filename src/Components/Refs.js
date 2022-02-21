import React, { Component } from 'react'

class Refs extends Component {
    constructor(){
        super();
        this.labelRef = React.createRef()
        this.state = {
            uname: '',
            lname: ''
        }
    }

    componentDidMount(){
        console.log(this.labelRef.current.checked)
        this.labelRef.current.focus()
    }

    handleClick = () => {
        alert(`Hello ${this.state.uname} ${this.state.lname}`)
    }

    changeHandler1 = (e) =>{
        this.setState({
            uname: e.target.value 
        })
    }

    changeHandler2 = (e) =>{
        this.setState({
            lname: e.target.value 
        })
    }

    submithandler = (e) => {
        e.preventDefault()
    }
  render() {
    return (
      <div>
          <form onSubmit={this.submithandler}>
              <label>UserName </label>
              <input type='text' ref={this.labelRef} value={this.state.uname} onChange={this.changeHandler1}/>
              <br/><br/>
              <label>LastName </label>
              <input type='text' value={this.state.lname} onChange={this.changeHandler2}/>
              <br/><br/>
              <button type="submit" onClick={this.handleClick}>Click</button>
          </form>
      </div>
    )
  }
}

export default Refs