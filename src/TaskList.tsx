import React, {FC} from "react";
import Task from "./Task";

interface TaskListProps {
  tasks: Task[];
}

export const TaskList: FC<TaskListProps> = ({tasks}) =>
  <div>
    <ul>
      {tasks.map((task, index) =>
        <li key={index}>
          <div>{task.tid}</div>
          <div>{task.title}</div>
          <div>{task.description}</div>
          <div>{task.done}</div>
        </li>
      )}
    </ul>
  </div>;
