import React from "react";
import { tasks } from "../../data";
import { TaskType } from "../../types/task";
import Task from "../task/Task";

interface TaskContainerProps {}

const TaskContainer: React.FC<TaskContainerProps> = () => {
  const taskList: TaskType[] = tasks;

  const handleDelete = () => {};

  return (
    <div className="task-list-container">
      {taskList.map((task: TaskType) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskContainer;
