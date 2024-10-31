import React from "react";
import '../../styles/ListOfTasks.css'

// create the function to render the tasks here
const ListOfTasks = ({tasks, setTasks}) => {
    
    const deleteTask = (selectedTaskID) => {
        // when the user clicks the button, the task item gets removed from the array
        // the browser will then re-render with the remaining tasks

        // use array.filter()
        let newArray = tasks.filter(task => task.id !== selectedTaskID);
        setTasks(newArray);
    }

    // create the function to render the tasks here        
    let renderTasks = tasks.map((task) => {
        return (
            // mapped list item NEED keys
            <li className='list-group-item' key={task.id}>
                <label className="task col-10" >{task.title}</label>
                <button className='deleteButton col-2' 
                        onClick={() => deleteTask(task.id)}>
                        Done
                    </button>
            </li>
        ) 
    });

    

    return(
        <>
            <ul className="list-group row">
                <li className='list-group-item ' key={99999999999999999}>
                    <label className="task col-10" ></label>
                </li>

                {
                    // write a ternary such that if the length of the 
                    //      list > 1, .map() the tasks as a list (<li>)
                    //      and render them on the browser.
                    //      Otherwise, display "No tasks. Add a task."
                    tasks.length !== 0
                        ? 
                        renderTasks 
                        : 
                        "--- No tasks. Add a task. ---"                  
                } 
            </ul>
        </>
    ); 
}

export default ListOfTasks
