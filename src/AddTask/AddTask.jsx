import React from "react";
import './AddTask.css';
import { useState } from "react";

const AddTask = (props) => {

  const [input, setInput] = useState('');
  const handleSubmit = e =>{
    e.preventDefault();
    props.submit({
      text : input,
      isComplete : false
    });
    setInput('');

  }
  const handleChange = e =>{
    setInput(e.target.value);
  }


  return (
    <center>
      <div className="Add-Task">
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder=" Add Task eg. Conference Meeting at 3pm" onChange={handleChange} value={input}/>
          <input type="submit" value="+" />
        </form>
      </div>
    </center>
  );
}

export default AddTask;