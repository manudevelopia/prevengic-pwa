import React, {FC, useState} from "react";
import Task from "./Task";

interface TaskCreatorProps {
  onCreate: (search: Task) => void;
}

export const TaskCreator: FC<TaskCreatorProps> = ({onCreate}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const disableForm = title.trim() === '';

  const addTask = () => {
    onCreate(buildTask());
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

