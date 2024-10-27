import React from "react";
import { TaskType } from "../../types/task";

import "./task.css";
import { useTaskList } from "../../custom-hooks/useTasks";

interface TaskProps {
  task: TaskType;
  onDelete: (task: TaskType) => void;
}

const Task: React.FC<TaskProps> = ({ task, onDelete }) => {
  const { updateStatus } = useTaskList();
  const handleDone = () => {
    updateStatus(task);
  };

  const handleDelete = () => {
    onDelete(task);
  };

  return (
    <div id={`${task.id}`} className={`task-container ${task.status}`}>
      <div className="task-info">
        <h3 className="task-title">{task.title}</h3>
        <p className="task-description">{task.description}</p>
      </div>
      <div className="task-actions">
        <button onClick={handleDone}>Done</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default Task;
