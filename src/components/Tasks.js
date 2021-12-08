
import Task from "./Task"

const Tasks = ({tasks, onRemove, onToggle}) => {
    return (
        <div>
          {tasks.map((task)=> (<Task key = {task.id} tasks = {task} 
          onDelete ={() => onRemove(task.id)} 
          onToggle={onToggle}/>))}
        </div>
    )
}

export default Tasks
