import React from "react";
import { Task } from "../interfaces/Task";

interface TaskItemProps {
  task: Task;
  toggleTask: (id: string) => void;
  deleteTask: (id: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, toggleTask }) => {
  return (
    <div className="d-flex align-items-center justify-content-between w-100">
      <input type="checkbox" className="form-check-input me-2" checked={task.completed} onChange={() => toggleTask(task.id)} />
      <span className={task.completed ? "text-decoration-line-through text-muted" : "fw-bold"}>{task.title}</span>
    </div>
  );
};

export default TaskItem;
