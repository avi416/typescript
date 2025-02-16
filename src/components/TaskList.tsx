// קובץ: components/TaskList.tsx
import React from "react";
import TaskItem from "./TaskItem";
import { Task } from "../interfaces/Task";

interface TaskListProps {
  tasks: Task[];
  toggleTask: (id: string) => void;
  deleteTask: (id: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, toggleTask, deleteTask }) => {
  return (
    <div className="table-responsive w-100">
      <table className="table table-striped table-bordered w-100">
        <thead className="table-dark">
          <tr>
            <th className="w-50">Task</th>
            <th className="w-25">Description</th>
            <th className="w-25 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td className="p-3 w-50">
                <TaskItem task={task} toggleTask={toggleTask} deleteTask={deleteTask} />
              </td>
              <td className="p-3 w-25">
                {task.description || "No description"}
              </td>
              <td className="text-center w-25">
                <button className="btn btn-sm btn-danger" onClick={() => deleteTask(task.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
