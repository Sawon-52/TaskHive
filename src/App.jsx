import { useState } from "react";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import TaskBoard from "./Components/TaskBoard/TaskBoard";

function App() {
  const defaultTask = {
    id: crypto.randomUUID(),
    title: "Learn React Native",
    description: "I Want to Learn React",
    tags: ["web", "react", "Js"],
    priority: "Low",
    isFavorite: true,
  };
  const [tasks, setTask] = useState([defaultTask]);

  return (
    <div className="w-[95%] lg:w-[80%] mx-auto">
      <Header></Header>
      <div>
        <TaskBoard tasks={tasks}></TaskBoard>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
