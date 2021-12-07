import { useState } from "react";
import Tasks from "./components/Tasks";
import Header from "./components/Header";
import AddForm from "./components/AddForm";

function App() {
   const[addTasks, setAddTasks] = useState(false)
  const[tasks, setAddTask] = useState([
  {
    id:1,
    project: "Css ",
    Day: "Today",
    start: "9:00 am"
  
  },
  {
    id:2,
    project: "javasript ",
    Day: "Tuesday",
    start: "8.00 am"
  },
  {
    id:3,
    project: "React ",
    Day: "Thursday",
    start: "8.00 am"
  }
  
  ])
 // delete items
 const deleteItem = (id) =>{
  setAddTask(tasks.filter((task) => task.id !== id))
 }

 // adding items
 const addItems = (task) =>{
  const id = Math.floor(Math.random()*10000)+1
  const newTask = [id,...task]
  setAddTask([...tasks, newTask])
 }

  return (
   
  <div className="container">
    <Header />
    <AddForm  onAdd = {addItems}/>
{ tasks.length > 0 ? (<Tasks tasks = {tasks} onRemove = {deleteItem}/>): ("No Item To Display")  }
    </div>
  );
}

export default App;
