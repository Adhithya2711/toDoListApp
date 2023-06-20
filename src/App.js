import React from "react";

const TodoApp = () =>{

    let dateObj = new Date();
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November",  "December"];
    let date = dateObj.getDate();
    let month = months[dateObj.getMonth()]
    // console.log(dateObj.getDay());
    // console.log(dateObj.getMonth());
    let day = days[dateObj.getDay()];




    return (
         <div className="Todo-App">
            <h1>Today <span>{day} {date} {month}</span></h1>
         </div>
    );
}

export default TodoApp;