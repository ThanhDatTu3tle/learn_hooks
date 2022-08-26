// import logo from './logo.svg';
// import './App.css';
import { useState } from "react";

function App() {
  const [quests, setQuests] = useState(() => {
    const storageQuests = JSON.parse(localStorage.getItem('jobs'))
    return storageQuests ?? []
  })
  const [quest, setQuest] = useState('')
  const [index, setIndex] = useState('')
  
  const handleSubmit = () => {
    setQuests(prev => {
      const newQuests = [...prev, quest]

      // save to localStorage
      const jsonQuests = JSON.stringify(newQuests)
      localStorage.setItem('jobs', jsonQuests)

      return newQuests
    })
    setQuest('')
  }

  const handleDelete = () => {
    quests.shift()
    // console.log(quests)
    setQuests(prev => {
      const newQuests = [...prev, index]

      // save to localStorage
      const jsonQuests = JSON.stringify(newQuests)
      localStorage.setItem('jobs', jsonQuests)

      return newQuests
    })
  }

  return (
    <div className="App" style={{ padding: 32 }}>
      <h2>todos</h2>
      <input 
        value={quest}
        onChange={e => setQuest(e.target.value)}
      />
      <button onClick={handleSubmit}>Add</button>

      <ul>
        {quests.map((quest, index) => (
          <div key={index}>
            <li>{quest}</li>
            <button onClick={handleDelete}>Cút</button>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default App;
