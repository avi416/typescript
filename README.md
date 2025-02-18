
# Task Manager Application

## Overview

This is a simple **Task Manager Application** built using **React and TypeScript**. It allows users to:

- Add tasks with descriptions.
- Mark tasks as completed.
- Delete tasks.
- Filter tasks (All, Completed, Not Completed).
- View motivational quotes that update every 20 seconds.

## Features

✅ **Add tasks** with a title and optional description.
✅ **Mark tasks as done** using a button.
✅ **Delete tasks** to remove them from the list.
✅ **Filter tasks** to view only completed or pending ones.
✅ **Persistent storage** using `localStorage`.
✅ **Live quotes** updating every 20 seconds.

## Installation & Setup

### Prerequisites

Make sure you have **Node.js** and **npm/yarn** installed.

### Clone the Repository

```sh
git clone https://github.com/your-username/task-manager.git
cd task-manager
```

### Install Dependencies

```sh
npm install
```

OR using Yarn:

```sh
yarn install
```

### Run the Project

Start the development server:

```sh
npm start
```

OR using Yarn:

```sh
yarn start
```

Then, open **`http://localhost:5173/`** in your browser.

## Project Structure

```
📂 src
 ┣ 📂 components
 ┃ ┣ 📜 TaskForm.tsx        # Form for adding new tasks
 ┃ ┣ 📜 TaskList.tsx        # Displays the list of tasks
 ┃ ┣ 📜 TaskItem.tsx        # Individual task component
 ┃ ┣ 📜 FilterButtons.tsx   # Filtering tasks
 ┃ ┗ 📜 App.tsx             # Main application
 ┣ 📂 interfaces
 ┃ ┗ 📜 Task.ts             # Task interface
 ┣ 📜 index.tsx             # Entry point
 ┣ 📜 App.tsx               # Root component
```

## Technologies Used

- **React** (Functional Components, Hooks)
- **TypeScript** (Static Typing)
- **Bootstrap** (Styling & UI Design)
- **LocalStorage** (Persistent data storage)
- **Fetch API** (Fetching motivational quotes)

## License

This project is licensed under the **MIT License**.

---

✨ **Developed by Avi Mahari**🚀


