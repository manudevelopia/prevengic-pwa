import React, {FC, useState} from "react";

interface TaskCreatorProps {
  onCreate: (search: string) => void;
}

export const TaskCreator: FC<TaskCreatorProps> = ({onCreate}) => {
  const [taskTitle, setTaskTitle] = useState('');
  const disableForm = taskTitle.trim() === '';

  const addTask = () => {
    onCreate(taskTitle);
    setTaskTitle('');
  };

  return (
    <div>
      <input type="text"
             value={taskTitle}
             onChange={e => setTaskTitle(e.target.value)}/>
      <button type="button" onClick={addTask}
              disabled={disableForm}>Add
      </button>
    </div>
  );
}

