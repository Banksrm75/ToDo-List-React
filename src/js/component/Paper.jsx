import React, { useState } from 'react'
import '../../styles/Paper.css'

import UserInput from './UserInput.jsx';
import ListOfTasks from './ListOfTasks.jsx';
import TasksLeft from './TasksLeft.jsx';
import ModifyUser from './ModifyUser.jsx';

const Paper = () => {

    const [toDo, setToDo] = useState("");
    const [tasks, setTasks] = useState([]);
    const [counter, setCounter] = useState(0);
    const [userName, setUsername] = useState("Banksrm")

    return(
        <>
            <div className="paper">
                <h1 className='title'>{userName}'s</h1>
                <h1 className='title'>To-Do List</h1>
                <UserInput 
                    toDo={toDo}
                    setToDo={setToDo}
                    tasks = {tasks}
                    setTasks = {setTasks}
                    counter = {counter}
                    setCounter = {setCounter}
                    userName = {userName}
                    setUserName = {setUsername}
                />
                <ListOfTasks 
                    tasks = {tasks}
                    setTasks = {setTasks}
                    userName = {userName}
                    setUserName = {setUsername}
                    
                />
                <TasksLeft 
                    tasks = {tasks}
                />
            </div>

            <div className="users">
            <ModifyUser
                userName = {userName}
                setUserName = {setUsername}
                />
            </div>
       
            
        </>
       
    );
}

export default Paper