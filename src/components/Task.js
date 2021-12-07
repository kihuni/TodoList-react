import React from 'react'
import {FaTimes} from "react-icons/fa"

const Task = ({tasks, onDelete}) => {
    return (
        <div className= "task" onClick ={onDelete}>
           <h3>{tasks.project}<FaTimes /></h3>
           <p>{tasks.Day}</p> 
           <p>{tasks.start}</p> 
        </div>
    )
}

export default Task
