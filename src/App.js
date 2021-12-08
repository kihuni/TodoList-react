import { useState } from "react";
import Tasks from "./components/Tasks";
import Header from "./components/Header";
import AddForm from "./components/AddForm";

function App() {
  const [showAddTask, setShowAddTask] = useState(true)
   
  const[tasks, setAddTask] = useState([
    {
      id:1,
      project: "Css ",
      Day: "Today",
      Time: "9:00 am",
      reminder: true
    
    },
    {
      id:2,
      project: "javasript ",
      Day: "Tuesday",
      Time: "8.00 am",
      reminder: true
    },
    {
      id:3,
      project: "React ",
      Day: "Thursday",
      Time: "8.00 am",
      reminder: false
    }
  ]);
 // delete items
 const deleteItem = (id) =>{
  setAddTask(tasks.filter((task) => task.id !== id))
 }

 // adding items
 const addItems = (task) =>{
  const id = Math.floor(Math.random()*10000)+1
       const newTask = {id,...task}
       setAddTask([...tasks, newTask])
     
 }

 // toggle the reminder

 const toggleReminder = (id) =>{
  setAddTask(tasks.map((task) => task.id === id ? {...task, reminder:!task.reminder} : task))
 }

  return (
   
  <div className="container">
    <Header onAdd1 = {() => setShowAddTask(!showAddTask)}/>
    {showAddTask && <AddForm  onAdd = {addItems}/>}
{ tasks.length > 0 ? (<Tasks tasks = {tasks} onRemove = {deleteItem} onToggle ={toggleReminder}/>): ("No Item To Display")  }
    </div>
  );
}

export default App;
