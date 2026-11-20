import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Footer from "./components/Footer";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks")
    return saved ? JSON.parse(saved) : []
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks)), [tasks]
  })
  const remainingTasks = tasks.filter((task) => !task.done).length;

  function addTask(newTask) {
    let id = Date.now();
    const newTaskObj = {
      id,
      text: newTask,
      done: false,
    };

    setTasks([...tasks, newTaskObj]);
  }

  function toggleDone(id) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, done: !task.done };
      }
      return task;
    });
    setTasks(updatedTasks);
  }
  function editTask(id, newText) {
    const updateTask = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, text: newText };
      }
      return task;
    });
    setTasks(updateTask);
  }

  function deleteTask(id) {
    const newTask = tasks.filter((task) => task.id !== id);
    setTasks(newTask);
  }

  function deleteAllTask() {
    tasks.length ? setTasks([]) : alert("There is no to-do list");
  }

  return (
    <div className="container">
      <Header />

      <main>
        <TaskForm onAddTask={addTask} />

        <TaskList
          tasks={tasks}
          onDeleteTask={deleteTask}
          onUpdate={editTask}
          onToggleDone={toggleDone}
        />
      </main>

      <footer>
        <Footer onClearAll={deleteAllTask} onCounter={remainingTasks} />
      </footer>
    </div>
  );
}

export default App;
