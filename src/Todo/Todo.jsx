import React from "react";
import './Todo.css';

const Todo = (props) =>{
    const arr=[1,2,3,4,5,6];
    const todolist = props.todo.map((currentEle,index) =>{
        
       return<div key={index}>
            <li key={arr[0]++}>
                <span key={arr[1]++} className={currentEle.isComplete ? 'completetask' : 'duetask'} 
                onClick = {() => props.isComplete(index)}>

                    {currentEle.text} </span>

                    <hr key={arr[2
                    ]++}/>
                    
               
            </li>
        </div>
    });
    return(
        <div >
            <center>

                <div className="Todo">
                    <ol className="ol">
                        {todolist}

                    </ol>

                </div>

            </center>
        </div>
    );
}

export default Todo;