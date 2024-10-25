import React from "react";
import { TaskType } from "../../types/task";

import "./task.css";

interface TaskProps {
  task: TaskType;
}

const Task: React.FC<TaskProps> = ({ task }) => {
  const handleDone = () => {
    const container = document.getElementById(`${task.id}`);

    if (container) {
      container.style.backgroundColor = "green";
    }
  };

  return (
    <div id={`${task.id}`} className="task-container">
      <div className="task-info">
        <h3 className="task-title">{task.title}</h3>
        <p className="task-description">{task.description}</p>
      </div>
      <div className="task-actions">
        <button onClick={handleDone}>Done</button>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default Task;
