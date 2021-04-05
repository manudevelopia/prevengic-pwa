import React, {FC, useState} from "react";
import Task from "./Task";

interface TaskCreatorProps {
  onCreate: (task: Task) => void;
}

export const TaskCreator: FC<TaskCreatorProps> = ({onCreate}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const disableForm = title.trim() === '';

  const addTask = () => {
    const task = buildTask();
    fetch('https://taskker-api.herokuapp.com/api/tasks',
      {method: 'POST', body: JSON.stringify(task)})
      .catch(error => console.log(error));
    onCreate(task);
    cleanForm();
  };

  function buildTask() {
    return {
      title: title,
      description: description
    };
  }

  function cleanForm() {
    setTitle('');
    setDescription('');
  }

  return (
    <div>
      <form>
        <input type="text"
               value={title} placeholder={'title'}
               onChange={e => setTitle(e.target.value)}/>
        <input type="text"
               value={description} placeholder={'description'}
               onChange={e => setDescription(e.target.value)}/>
        <button type="button" onClick={addTask}
                disabled={disableForm}>Add
        </button>
      </form>
    </div>
  );
}

