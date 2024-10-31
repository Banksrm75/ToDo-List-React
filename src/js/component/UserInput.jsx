import React from 'react'
import '../../styles/UserInput.css'

const UserInput = ({toDo, setToDo, tasks, setTasks, counter, setCounter, userName, setUsername}) => {
    
    // VALIDATE USER INPUT - toDo variable stores input in real time
    const validateInput = () => {
        if (toDo === ""){
            alert("Please add a task.");
        }
        else{
            addATask();
            setToDo(""); // clears out input window upon adding task
        }
    }

    // Create the task object
        const addATask = () => {
        
            // create a new object with id, title, and done keys
        let newTaskItem = {
            id: counter,
            title: toDo,
            done: false
        }

        // use setTasks to append the newly created object to the tasks array
        // spread operator (...) - quickly copy (all or part of) an existing  
        //          array or object into another array or object
        setTasks([...tasks, newTaskItem]);
                
        // increment the counter by 1
        setCounter(counter + 1);
    };
    

    // get input ( -> string ) ==> add to array ==> set as a todo    
    return (
        <div className="userInput row">
            <div className="task col-10">
                {/* input's task is to update the toDo variable (string) 
                        THEN, the string gets  turned into an object and 
                        FINALLY the object gets added to the array -> */}
                <input 
                    className='taskEntry'
                    type="text"
                    placeholder="What needs to be done?"

                    // updates useState so it saves it in our toDo variable
                    onChange={e => setToDo(e.target.value)}
                    value={toDo}
                />
                
            </div>
            <div className="button col-2">
                <button className='AddATask' onClick={validateInput}>Add Task</button>
            </div>
        </div>
    );
        
}

export default UserInput