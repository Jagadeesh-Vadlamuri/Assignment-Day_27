import React, { useState } from "react";
import Filter from "./Filter";
import Tasks from "./Tasks";

function SearchComp({onSubmit}) {
    const [text, setText] = useState('')
    return (
        <form>
          <input
            type="text"
            className="form-control add-task"
            placeholder="New Task..."
            value={text}
            onChange={(e)=>{setText(e.target.value)}}
            onKeyPress={(e)=>{
                if(e.key==='Enter' && text.length>0){
                    onSubmit(text, e)  
                    setText('')   
                }
            }}
          />
        </form>
    );
  }

export default SearchComp;
