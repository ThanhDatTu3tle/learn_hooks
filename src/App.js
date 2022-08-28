// import logo from './logo.svg';
// import './App.css';
import { useState } from "react";

function App() {
  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState(() => {
    const storageTasks = JSON.parse(localStorage.getItem('Tasks'))

    return storageTasks ?? []
  })

  const handleSubmit = () => {
    if (!task) return;
    setTasks(prev => {
      const newTasks = [...prev, task]

      const jsonTasks = JSON.stringify(newTasks)
      localStorage.setItem('Tasks', jsonTasks)

      return newTasks
    })
    setTask('')
  }

  const handleDelete = (curTask) => {
    const tasksList = tasks.filter((task) => (task !== curTask))
    setTasks(tasksList)
    localStorage.setItem('Tasks', tasksList)
  }

  return (
    <div className="App" style={{ padding: 32 }}>
      <h1>todos</h1>
      <input 
        value={task} 
        onChange={e => setTask(e.target.value)}
      />
      <button onClick={handleSubmit}>
        Add
      </button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => handleDelete(task)}>
              Cút
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
