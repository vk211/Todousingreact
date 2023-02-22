import "./App.css";
import { useState } from "react";
import AddTask from "./components/AddTask/AddTask";
import DisplayTasks from "./components/DisplayTasks";

function App() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="App">
      <AddTask submitTask={handleAddTask} />
      <DisplayTasks tasks={tasks} />
    </div>
  );
}

export default App;
