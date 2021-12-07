
import Task from "./Task"

const Tasks = ({tasks, onRemove}) => {
    return (
        <div>
          {tasks.map((task)=> (<Task key = {task.id} tasks = {task} onDelete ={() => onRemove(task.id)}/>))}
        </div>
    )
}

export default Tasks
