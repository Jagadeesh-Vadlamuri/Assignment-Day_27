import React, { useState } from "react";
import Task from "./Task";

function Tasks({ name, marked, id, checkHandler, closehandler }) {
  const [list1, setList] = useState(["List1"]);
  return (
    <React.Fragment>
      <div className={"todo-item " + (marked ? "complete" : "")}>
        <div className="checker">
          <span className="">
            <input
              type="checkbox"
              onChange={(e) => checkHandler(id, e.target.checked)}
              checked={marked}
            />
          </span>
        </div>
        <span> {name}</span>
        <button style={{float:'right'}} onClick={() => closehandler(id)} className='btn btn-primary'>X</button>
      </div>
    </React.Fragment>
  );
}

export default Tasks;
