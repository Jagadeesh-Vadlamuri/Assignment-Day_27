import React, { useState } from "react";

function Filter({filterHandler}) {
  const filters = ["All", "Active", "Completed"];
  const clickHandler = (newValue) => {
    filterHandler(newValue)
  }
  return (
    <ul className="nav nav-pills todo-nav">
      {filters.map((item) => {
        return (
          <li
            role="presentation"
            className="nav-item all-task active"
            onClick={() => clickHandler(item)}
          >
            <a href="#" className="nav-link">
              {item}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default Filter;
