import { useState } from 'react'
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import Task from "./components/Task";



function App() {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Food Shooping",
      day: "Feb 5th at 230",
      reminder: false
    },
    {
      id: 2,
      text: "Dr Appt",
      day: "Feb 10th at 1",
      reminder: true
    },
    {
      id: 3,
      text: "Clean house",
      day: "Jan 25th at 230",
      reminder: false
    },
  ])


  // Delete Task

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))

  }

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : "No Tasks To Show"}

    </div>


  );
}

export default App;
