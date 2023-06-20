import React from "react";
import './AddTask.css';

const AddTask = () =>{
    return(
        <center>
        <div className="Add-Task">
          <form>
            <input type="text" placeholder=" Add Task eg. Conference Meeting at 3pm"/>
            <input type = "submit" value="+"/>
          </form>
        </div>
        </center>
    );
}

export default AddTask;