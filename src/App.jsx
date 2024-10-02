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

  function handleModal() {
    setShowModal(false);
  }

  function handleAddTask() {
    setShowModal(true);
  }
  function handleAddNewTask(newTask) {
    console.log("adding new tasks.at.", newTask);
    setTasks([...tasks, newTask]);
    setShowModal(false);

    // setTasks(newTask);
  }
  console.log("hlw", tasks);

  return (
    <div className="w-[95%] lg:w-[80%] mx-auto">
      {showModal && <AddTaskModal handleModal={handleModal} onSave={handleAddNewTask}></AddTaskModal>}
      <Header></Header>
      <div>
        <TaskBoard tasks={tasks} handleAddTask={handleAddTask}></TaskBoard>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
