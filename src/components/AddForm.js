
import { useState } from "react"


const AddForm = ({onAdd}) => {

 
     const [addTask, setAddTask] = useState('')
     const [addday, setAddDay] = useState('')
     const [ addTime, setAddTime] = useState('')
     const[ reminder, setReminder ] = useState(false)

     const onSubmit = (e)=>{
        e.preventDefault()

        if(!addTask){
            alert("please add project")
            return
        }
        onAdd({addTask, addday,addTime,reminder})

        setAddTask('')
        setAddDay('')
        setAddTime('')
        setReminder(true)
    }
    return (
        <form className= "add-form" onSubmit ={onSubmit}>
          <div className ="form-control">
            <label >AddTask</label>
            <input type="text" value ={addTask} placeholder = "addTask" onChange={(e) => setAddTask(e.target.value )}/> 
          </div>  
          <div className = "form-control">
            <label>AddDay</label>
            <input type="text" value = {addday} placeholder = "addDay" onChange={(e) => setAddDay(e.target.value )}/> 
          </div> 
          <div className = "form-control">
            <label>AddTime</label>
            <input type="text" value ={addTime} placeholder = "addTime" onChange={(e) => setAddTime(e.target.value )}/> 
          </div> 
          <div className = "form-control" className= "form-control-check" >
                <label>Set Reminder</label>
                <input type="checkbox" value = {reminder} checked ={reminder} onChange={(e) => setReminder(e.currentTarget.checked )}/>
            </div>
            
        <input type="submit"  value ="save-task" className ="btn btn-block"/>
        </form>
    )
}



export default AddForm
