import React, { useState } from "react";
import { tasks } from "../../data";
import { TaskType } from "../../types/task";
import Task from "../task/Task";

interface TaskContainerProps {}

const TaskContainer: React.FC<TaskContainerProps> = () => {
  const [taskList, setTaskList] = useState<TaskType[]>(tasks);

  const handleDelete = (toBeDeleted: TaskType) => {
    const updatedTasks = taskList.filter((task) => task.id !== toBeDeleted.id);

    setTaskList(updatedTasks);
  };

  return (
    <div className="task-list-container">
      {taskList.map((task: TaskType) => (
        <Task key={task.id} task={task} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default TaskContainer;
