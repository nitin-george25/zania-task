import React, { useState } from "react";
import { tasks } from "../../data";
import { TaskType } from "../../types/task";
import Task from "../task/Task";

import "./task-container.css";
import { useTaskList } from "../../custom-hooks/useTasks";

interface TaskContainerProps {
  tasks: TaskType[];
}

const TaskContainer: React.FC<TaskContainerProps> = ({ tasks }) => {
  const { addTask, deleteTask } = useTaskList();

  const handleDelete = (toBeDeleted: TaskType) => {
    deleteTask(toBeDeleted);
  };

  return (
    <div className="task-list-container">
      {tasks.map((task: TaskType) => (
        <Task key={task.id} task={task} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default TaskContainer;
