import React, { Component } from "react";

const RefsClassChild = React.forwardRef(
    (props, ref) => {
        return (
            <div>
              <form>
                <label>UserName </label>
                <input type="text" ref={ref}/>
                <br />
                <br />
                <label>LastName </label>
                <input type="text" />
              </form>
            </div>
          );
    }
) 

export default RefsClassChild;
