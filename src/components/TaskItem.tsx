import React from "react";
import { Task } from "../interfaces/Task";

interface TaskItemProps {
  task: Task;
  toggleTask: (id: string) => void;
  deleteTask: (id: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, toggleTask, deleteTask }) => {
  return (
    <tr>
      <td className="p-3 w-50">
        {/** Displays the task title. If the task is completed, it appears with a strikethrough. */}
        <span className={task.completed ? "text-decoration-line-through text-muted" : "fw-bold"}>{task.title}</span>
      </td>
      <td className="p-3 w-25">{task.description || "No description"}</td>
      <td className="text-center w-25">
        {/** Button to toggle the task completion status */}
        <button 
          className={`btn btn-sm ${task.completed ? 'btn-secondary' : 'btn-success'}`} 
          onClick={() => toggleTask(task.id)}>
          {task.completed ? "Completed" : "Mark as Done"}
        </button>
        {/** Button to delete the task */}
        <button className="btn btn-sm btn-danger ms-2" onClick={() => deleteTask(task.id)}>Delete</button>
      </td>
    </tr>
  );
};

export default TaskItem;