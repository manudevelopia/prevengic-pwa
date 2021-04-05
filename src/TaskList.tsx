import React, {FC} from "react";
import Task from "./Task";

interface TaskListProps {
  tasks: Task[];
}

function updateDone(e: any) {
  if (e.target.dataset.tid !== undefined) {
    fetch('https://taskker-api.herokuapp.com/api/tasks/' + e.target.dataset.tid,
      {method: 'PATCH', credentials: 'same-origin'})
      .catch(error => console.log(error));
  }
}

export const TaskList: FC<TaskListProps> = ({tasks}) =>
  <div>
    <ul>
      {tasks.map((task, index) =>
        <li key={index}>
          <div>
            <input type="radio" data-tid={task.tid} checked={task.done} onChange={e => updateDone(e)}/>
            {task.title}
          </div>
          <div>{task.description}</div>
        </li>
      )}
    </ul>
  </div>;
