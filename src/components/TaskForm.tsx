import React, { useState } from "react";
import { Task } from "../interfaces/Task";

interface TaskFormProps {
  addTask: (task: Task) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ addTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      addTask({ id: Date.now().toString(), title, description, completed: false });
      setTitle("");
      setDescription("");
    }
  };

  return (
    <form className="mb-3 w-100" onSubmit={handleSubmit}>
      <div className="input-group mb-2">
        <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Task Title" required />
        <input type="text" className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Task Description (Optional)" />
        <button type="submit" className="btn btn-primary">Add Task</button>
      </div>
    </form>
  );
};

export default TaskForm;