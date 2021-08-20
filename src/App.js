import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";


export default function App() {
  const [tasks, setTasks] = useState([
      {
          id: 1,
          text: 'Drink Water',
          day: 'Aug 20th at 20:00',
          reminder: false,
      },
      {
          id: 2,
          text: 'Keep Learning',
          day: 'Aug 19th at 23:00',
          reminder: true,
      },
      {
          id: 3,
          text: 'Sleep',
          day: 'Aug 20th at 01:00',
          reminder: false,
      }
  ]);

  // Delete Task:
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  };

  // Toggle Reminder:
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task)
    )};

  return (
    <div className="container">
      <Header title='Task Tracker'/>
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
    </div>
  );
}