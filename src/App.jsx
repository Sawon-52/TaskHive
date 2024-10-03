import { useState } from "react";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import TaskBoard from "./Components/TaskBoard/TaskBoard";
import AddTaskModal from "./Components/TaskBoard/TaskGenaretor/PerformTask/AddTaskModal/AddTaskModal";

function App() {
  const defaultTask = {
    id: crypto.randomUUID(),
    title: "Learn React Native",
    description: "I Want to Learn React",
    tags: ["web", "react", "Js"],
    priority: "Low",
    isFavorite: true,
  };
  const [tasks, setTasks] = useState([defaultTask]);
  const [showModal, setShowModal] = useState(false);
  const [updateTask, setUpdate] = useState(null);

  function handleModal() {
    setShowModal(false);
    setUpdate(null);
  }

  function handleAddTask() {
    setShowModal(true);
    setUpdate(null);
  }

  function handleAddNewTask(newTask, isAdd) {
    if (isAdd) {
      setTasks([...tasks, newTask]);
    } else {
      setTasks(
        tasks.map((task) => {
          if (task.id === newTask.id) {
            return newTask;
          }
          return task;
        }),
      );
    }

    setShowModal(false);
  }

  function handleEdit(task) {
    setUpdate(task);
    setShowModal(true);
    console.log("updated task", updateTask);
  }

  function handleDelete(taskId) {
    const tasksAfterDelete = tasks.filter((task) => task.id !== taskId);
    setTasks(tasksAfterDelete);
  }
  function handleClearAll() {
    tasks.length = 0;
    setTasks([...tasks]);
  }

  function handleFavorite(taskId) {
    const taskIndex = tasks.findIndex((task) => task.id === taskId);

    const newTasks = [...tasks];
    newTasks[taskIndex].isFavorite = !newTasks[taskIndex].isFavorite;
    setTasks(newTasks);
  }

  function handleSearch(searchItems) {
    console.log(searchItems);
    const filtered = tasks.filter((task) => task.title.toLowerCase().includes(searchItems.toLowerCase()));
    setTasks([...filtered]);
  }

  return (
    <div className="w-[95%] lg:w-[80%] mx-auto">
      {showModal && <AddTaskModal handleModal={handleModal} onSave={handleAddNewTask} updateTask={updateTask}></AddTaskModal>}
      <Header onSearch={handleSearch}></Header>
      <div>
        <TaskBoard tasks={tasks} handleAddTask={handleAddTask} onEdit={handleEdit} onDelete={handleDelete} onClearAll={handleClearAll} onFav={handleFavorite}></TaskBoard>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
