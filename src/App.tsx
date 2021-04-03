import React, {useState} from 'react';
import './App.css';
import {TaskCreator} from "./TaskCreator";
import {TaskList} from "./TaskList";


function App() {
  const [tasks, setTasks] = useState<string[]>([]);
  const addTask = (task: string) => setTasks([task, ...tasks]);

  return (
    <div className="container">
      <h1>Tasks</h1>
      <TaskCreator onCreate={addTask}/>
      <TaskList tasks={tasks}/>
    </div>
  );
}

export default App;
