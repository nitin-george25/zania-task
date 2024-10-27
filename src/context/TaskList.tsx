import React, { createContext, ReactNode, useState } from "react";
import { tasks } from "../data";
import { TaskType } from "../types/task";

interface TaskListProviderProps {
  children: ReactNode;
}

interface TaskListContextType {
  taskList: TaskType[];
  addTask: (task: TaskType) => void;
  deleteTask: (task: TaskType) => void;
  updateStatus: (task: TaskType) => void;
}

export const TaskContext = createContext<TaskListContextType | null>(null);

export const TaskListProvider: React.FC<TaskListProviderProps> = ({
  children,
}) => {
  const [taskList, setTaskList] = useState<TaskType[]>(tasks);

  const addTask = (task: TaskType) => {
    setTaskList((prevTasks) => [...prevTasks, task]);
  };

  const deleteTask = (task: TaskType) => {
    const updatedTasks = taskList.filter((t) => t.id !== task.id);
    setTaskList(updatedTasks);
  };

  const updateStatus = (task: TaskType) => {
    const updatedTasks = [...taskList];
    const taskToUpdate = updatedTasks.find(
      (currentTask) => task.id === currentTask.id
    );

    if (taskToUpdate) taskToUpdate.status = "done";
    setTaskList(updatedTasks);
  };

  return (
    <TaskContext.Provider
      value={{ taskList, addTask, deleteTask, updateStatus }}
    >
      {children}
    </TaskContext.Provider>
  );
};
