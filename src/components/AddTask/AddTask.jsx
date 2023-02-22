import { useState } from "react";

function AddTask({ submitTask }) {
  const [val, setv] = useState("");
  const handleAddTask = () => {
    submitTask(val);
    setv("");
  };
  return (
    <div className="taskChild">
        <input value={val} onChange={(e) => setv(e.target.value)} />
        <button onClick={handleAddTask}>Add</button>
    </div>
  );
}

export default AddTask;
