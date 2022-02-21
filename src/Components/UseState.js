import React, {useState} from 'react'

function UseState(props) {
    const [count, setCount] = useState(0);
    const [items, setItems] = useState(['Nani', 'Navya', 'Teja', 'Keerthi'])
    const [obj, setObject] = useState({
        fname: 'Jagadeesh',
        lname: 'Vadlamuri',
        location: 'Hyderabad',
        age: 24
    })
    const changeHandler = () => {
        setCount(count + 5);
        setItems([...items, count + 5])
        setObject({count: count + 5, ...obj})
    }
   
  return (
    <div>
        <h1 onMouseOver={changeHandler}>{props.name} Hovered {count} times</h1>
        <button className="btn btn-primary m-3" onClick={changeHandler}>Clicked {count + 5} times</button>
        {
            items.map((item, index)=>{
                return <h5 key={index}>{item}</h5>
            })
        }
        <button className="btn btn-danger m-3" onClick={changeHandler}>Click Me</button>
        <h5>{obj.fname} {count}</h5>
    </div>
  )
}

export default UseState