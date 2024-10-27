import "./App.css";
import TaskContainer from "./components/task-container/TaskContainer";
import { TaskListProvider } from "./context/TaskList";
import { AddTask } from "./components/add-task-form/AddTask";
import { useState } from "react";

function App() {
  const [showForm, setShowForm] = useState<boolean>(false);

  const openForm = () => {
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  return (
    <TaskListProvider>
      <div className="app-container">
        <div className="task-manager">
          <div className="toolbar">
            <button style={{ cursor: "pointer" }} onClick={openForm}>
              Add Task
            </button>
          </div>
          <TaskContainer />
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
    </TaskListProvider>
  );
}

export default App;
