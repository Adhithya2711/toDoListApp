import React, { useState } from "react";
import AddTask from "../AddTask/AddTask";
import Todo from "../Todo/Todo";

const Todolist = () =>{

    const [todos,setTodos] = useState([]);
    const Addtodo = todo =>{
        if(!todo.text ){
            return;
        }
        else{
        const newtodo = [...todos,todo];
        console.log(newtodo);
    
        setTodos(newtodo);
        }

    }
    const isComplete = (index) =>{

        const updatelist = [...todos];
        updatelist[index].isComplete = !updatelist[index].isComplete;
        console.log(updatelist);
        setTodos(updatelist);

    }
    return(
        <div className="Todo-List">
            



            <AddTask submit = {Addtodo} />
            <Todo  todo = {todos} isComplete = {isComplete} />
        </div>
    );
}

export default Todolist;