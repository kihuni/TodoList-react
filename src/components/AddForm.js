
import { useState } from "react"


const AddForm = ({onAdd}) => {

 
     const [project, setProject] = useState('')
     const [Day, setDay] = useState('')
     const [Time, setTime] = useState('')
     const[ reminder, setReminder ] = useState(false)

     const onSubmit = (e)=>{
        e.preventDefault()

        if(!project){
            alert("please add project")
            return
        }
        onAdd({project,Day,Time,reminder})

        setProject('')
        setDay('')
        setTime('')
        setReminder(false)
    }
    return (
        <form className= "add-form" onSubmit ={onSubmit}>
          <div className ="form-control">
            <label >AddTask</label>
            <input type="text"  placeholder = "addTask" value ={project} onChange={(e) => setProject(e.target.value )}/> 
          </div>  
          <div className = "form-control">
            <label>AddDay</label>
            <input type="text"  placeholder = "addDay" value = {Day} onChange={(e) => setDay(e.target.value )}/> 
          </div> 
          <div className = "form-control">
            <label>AddTime</label>
            <input type="text" placeholder = "Time" value ={Time}  onChange={(e) => setTime(e.target.value )}/> 
          </div> 
          <div className = 'form-control form-control-check'>
                <label>Set Reminder</label>
                <input className="set-tick" type="checkbox" checked ={reminder} value = {reminder}  onChange={(e) => setReminder(e.currentTarget.checked )}/>
            </div>
            
        <input type="submit"  value ="save-task" className ="btn btn-block"/>
        </form>
    )
}



export default AddForm
