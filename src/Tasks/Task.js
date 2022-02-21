import React, { useState } from "react";
import Tasks from "./Tasks";

function Task({ lists, checkHandler, closehandler }) {
  return (
    <div className="todo-list">
      {lists.length > 0 ? lists.map((list) => {
        return (
          <Tasks
            key={list.id}
            name={list.name}
            marked={list.marked}
            id={list.id}
            checkHandler={checkHandler}
            closehandler={closehandler}
          />
        )
      }) : <h4>No Items left</h4>}
    </div>
  );
}

export default Task;
