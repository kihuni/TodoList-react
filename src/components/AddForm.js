
import { useState } from "react"


const AddForm = ({onAdd}) => {

 
     const [addTask, setAddTask] = useState('')
     const [addday, setAddDay] = useState('')
     const [ addTime, setAddTime] = useState('')
     const[ addReminder, setReminder ] = useState(false)

     const onSubmit = (e)=>{
        e.preventDefault()

        if(!addTask){
            alert("please add project")
        }
        onAdd({addTask, addday,addTime,addReminder})

        setAddTask('')
        setAddDay('')
        setAddTime('')
        setReminder(true)
    }
    return (
        <form className= "add-form" onSubmit ={onSubmit}>
          <div className ="form-control">
            <label htmlFor="">AddTask</label>
            <input type="text" value ={addTask} placeholder = "addTask" onChange={(e) => setAddTask(e.target.value )}/> 
          </div>  
          <div className = "form-control">
            <label htmlFor="">AddDay</label>
            <input type="text" value = {addday} placeholder = "addDay" onChange={(e) => setAddDay(e.target.value )}/> 
          </div> 
          <div className = "form-control">
            <label htmlFor="">AddTime</label>
            <input type="text" value ={addTime} placeholder = "addTime" onChange={(e) => setAddTime(e.target.value )}/> 
          </div> 
          <div className = "form-control" >
                <label>Set Reminder</label>
                <input type="checkbox" value = {addReminder} checked ={addReminder} onChange={(e) => setReminder(e.currentTarget.checked )}/>
            </div>
            
        <input type="submit"  value ="save-task"/>
        </form>
    )
}



export default AddForm
