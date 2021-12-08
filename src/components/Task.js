import React from 'react'
import {FaTimes} from "react-icons/fa"

const Task = ({tasks, onDelete, onToggle}) => {
    return (
        <div className= {`task ${tasks.reminder ? 'reminder': ''}`}  onDoubleClick ={()=> onToggle(tasks.id)}>
           <h3>{tasks.project}<FaTimes onClick ={onDelete}/></h3>
           <p>{tasks.Day}</p> 
           <p>{tasks.Time}</p> 
        </div>
    )
}

export default Task
