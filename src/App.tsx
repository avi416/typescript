import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import FilterButtons from "./components/FilterButtons";
import { Task } from "./interfaces/Task";

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(
    JSON.parse(localStorage.getItem("tasks") || "[]")
  );
  const [filter, setFilter] = useState("all");

  /**
   * Saves the tasks to local storage whenever they are updated.
   */
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  /**
   * Adds a new task to the task list.
   * @param {Task} task - The task to be added.
   */
  const addTask = (task: Task) => setTasks([...tasks, task]);

  /**
   * Toggles the completion status of a task.
   * @param {string} id - The ID of the task to toggle.
   */
  const toggleTask = (id: string) => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, completed: !task.completed } : task)));
  };

  /**
   * Deletes a task from the task list.
   * @param {string} id - The ID of the task to delete.
   */
  const deleteTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  /**
   * Filters the task list based on the selected filter.
   */
  const filteredTasks = tasks.filter(task =>
    filter === "all" ? true : filter === "completed" ? task.completed : !task.completed
  );

  return (
    <div className="vh-100 d-flex flex-column justify-content-start bg-light text-dark p-3 w-100">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary w-100 mb-4">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Task Manager</a>
        </div>
      </nav>
      <div className="container-fluid w-100 px-5">
        <div className="bg-white p-5 rounded shadow-lg w-100">
          <h2 className="mb-4 text-center text-primary">Manage Your Tasks</h2>
          <TaskForm addTask={addTask} />
          <FilterButtons setFilter={setFilter} />
          <TaskList tasks={filteredTasks} toggleTask={toggleTask} deleteTask={deleteTask} />
        </div>
      </div>
    </div>
  );
};

export default App;