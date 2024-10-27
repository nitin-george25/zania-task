import { useContext } from "react";
import { TaskContext } from "../context/TaskList";

export const useTaskList = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTaskList must be used within a TaskListProvider");
  }
  return context;
};
