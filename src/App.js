//Basic React Code with props
import React, { useState } from "react";
import "./App.css";
import React1 from "./Components/React1";
import Count from "./Components/Count";
import FunctionClick from "./Components/FunctionClick";
import ClassClick from "./Components/ClassClick";
import Bind from "./Components/Bind";
import Parent from "./Components/Parent";
import CondRender from "./Components/CondRender";
import MapArray from "./Components/MapArray";
import MapObject from "./Components/MapObject";
import StyleSheet from "./Components/StyleSheet";
import Forms from "./Components/Forms";
import LifeCycle1 from "./Components/LifeCycle1";
import TableParent from "./Components/TableParent";
import ParentComponent from "./Components/ParentComponent";
import Refs from "./Components/Refs";
import RefsClass from "./Components/RefsClass";
import Portals from "./Components/Portals";
import HOCCounter1 from "./Components/HOCCounter1";
import HOCCounter2 from "./Components/HOCCounter2";
import SearchComp from "./Tasks/SearchComp";
import Filter from "./Tasks/Filter";
import Tasks from "./Tasks/Tasks";
import UseState from "./Components/UseState";
import Task from "./Tasks/Task";

export default function App() {
  const [filter, setFilter] = useState("All");
  const [newId, setId] = useState(3)
  const [lists, setList] = useState([
    {
      id:1,
      name: "List1",
      marked: true,
    },
    {
      id:2,
      name: "List2",
      marked: false,
    },
  ]);

  const onSubmit = (value, e) => {
    const newState = {
      id: newId,
      name: value,
      marked: false
    };
    console.log(newState.marked, newState.name)
    setList([...lists, newState])
    setId(newId+1)
    e.preventDefault()
  }

  const checkHandler = (id, checked) => {
    setList(lists.map(item=>{
      return item.id === id ? {...item, marked:checked} : item;
    }));
  };

  const filterHandler = (newValue) => {
    setFilter(newValue)
  }

  const filterChange = () => {
    if(filter === 'Active'){
      return lists.filter(item => item.marked === false)
    
    }
    else if(filter === 'Completed'){
      return lists.filter(item => item.marked === true)
    }
    return lists;
  }

  const closehandler = (id) => {
    setList(lists.filter(item => item.id!==id))
  }
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card card-white">
              <div className="card-body">
                <SearchComp onSubmit={onSubmit}/>
                <Filter filterHandler={filterHandler}/>
                <Task lists={filterChange()} checkHandler={checkHandler} closehandler={closehandler}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// // import { render } from '@testing-library/react';
// import React from 'react';
// import ReactDOM from 'react-dom';

// export default class Timer extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = { seconds : 0 };
//   }

//   tick(){
//     this.setState(state => ({
//       seconds: state.seconds + 1
//     }));
//   }

//   componentDidMount(){
//     this.interval = setInterval(() => this.tick(), 1000);
//   }

//   componentWillUnmount(){
//     clearInterval(this.interval);
//   }

//   render() {
//     return (
//       <div>
//         <h1>Seconds: {this.state.seconds}</h1>
//       </div>
//     );
//   }
// }

// ReactDOM.render(
//   <Timer />,
//   document.getElementById('root')
// );
