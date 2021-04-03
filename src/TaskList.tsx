import React, {FC} from "react";

interface TaskListProps {
  tasks: string[];
}

export const TaskList: FC<TaskListProps> = ({tasks}) =>
  <div>
    <ul>
      {tasks.map((task, index) =>
        <li key={index}>{task}</li>
      )}
    </ul>
  </div>;
