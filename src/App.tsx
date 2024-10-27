import "./App.css";
import TaskContainer from "./components/task-container/TaskContainer";
import { AddTask } from "./components/add-task-form/AddTask";
import { ChangeEventHandler, useState } from "react";
import { useTaskList } from "./custom-hooks/useTasks";
import { TaskType } from "./types/task";

function App() {
  const { taskList } = useTaskList();

  const [showForm, setShowForm] = useState<boolean>(false);
  const [currentTasks, setCurrentTasks] = useState<TaskType[]>(taskList);
  const [searchValue, setSearchValue] = useState<string>("");

  const openForm = () => {
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  const changeSearchValue: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearch = () => {
    if (searchValue === "") {
      return;
    }

    const matchingTasks = taskList.filter((task) =>
      task.category.toLowerCase().includes(searchValue.toLowerCase())
    );

    setCurrentTasks(matchingTasks);
  };

  const cancelSearch = () => {
    setCurrentTasks(taskList);
    setSearchValue("");
  };

  return (
    <div className="app-container">
      <div className="task-manager">
        <div className="toolbar">
          <button style={{ cursor: "pointer" }} onClick={openForm}>
            Add Task
          </button>
          <div className="search-container">
            <input onChange={changeSearchValue} name="search" type="text" />
            <button onClick={handleSearch}>Search</button>
            <button onClick={cancelSearch}>Cancel</button>
          </div>
        </div>
        <TaskContainer tasks={currentTasks} />
      </div>
      {showForm && (
        <div className="overlay">
          <div
            style={{
              zIndex: 1000,
              background: "white",
              padding: "1em",
              borderRadius: "1em",
            }}
            className="modal"
          >
            <AddTask onCancel={closeForm} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
