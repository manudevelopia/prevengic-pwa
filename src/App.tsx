import React, {useState} from 'react';
import './App.css';
import {TaskCreator} from "./TaskCreator";
import {TaskList} from "./TaskList";
import Task from "./Task";


function App() {
  const [tasks, setTasks] = useState<Task[]>(JSON.parse(
    '[{"tid":"0c6d7b96e27744659d909f4126f68ee9","title":"task 10 title","description":"task 10 description","done":false},{"tid":"d7b0ea47e9fc44ed99ee785759574be3","title":"task 10 title","description":"task 10 description","done":false},{"tid":"47f9eba5ba054a38b785d1047d4f5292","title":"task 10 title","description":"task 10 description","done":false},{"tid":"357effa02a7f4d0aaa6a9e415fb38315","title":"task 10 title","description":"task 10 description","done":false},{"tid":"d9e6a7df7f3e4883b588c46bea0a771f","title":"task 10 title","description":"task 10 description","done":false},{"tid":"bc3b09709be5460e8f619c95c87c254f","title":"task 10 title","description":"task 10 description","done":false},{"tid":"bf68acf0b7224e199b913d1b2311fbc4","title":"task 10 title","description":"task 10 description","done":false},{"tid":"8557d08e9f1d475aa41c7fed2b2dcdd0","title":"task 10 title","description":"task 10 description","done":false},{"tid":"5254c3bdeb1f4e8c960c10cde0bb9f9a","title":"task 10 title","description":"task 10 description","done":false},{"tid":"76f5dccc21ee44288de60b0cde2ad976","title":"task 10 title","description":"task 10 description","done":false},{"tid":"409903ccf91c46be8b8aec9e9c2c6724","title":"task 10 title","description":"task 10 description","done":false},{"tid":"2495f61ba17a40afb66227710e4d2708","title":"task 10 title","description":"task 10 description","done":false},{"tid":"b235271f89e14f45b236e3920961bc70","title":"task 10 title","description":"task 10 description","done":false},{"tid":"f7ca6fcc1875450393523274beeef650","title":"task 10 title","description":"task 10 description","done":false},{"tid":"c8d4edabc26c4e598cbdc39585bef87c","title":"task 10 title","description":"task 10 description","done":false},{"tid":"344ff3b5ebe04556b648c1876e980429","title":"task 10 title","description":"task 10 description","done":false},{"tid":"8ac6e3a1d96c42a881c25e5e07b9383b","title":"update task 10 title","description":"update task 10 description","done":false}]'
  ));

  const createTask = (title: string): Task => {
    return {title: title};
  }

  const addTask = (task: string) => setTasks([createTask(task), ...tasks]);


  return (
    <div className="container">
      <h1>Tasks</h1>
      <TaskCreator onCreate={addTask}/>
      <TaskList tasks={tasks}/>
    </div>
  );
}

export default App;
