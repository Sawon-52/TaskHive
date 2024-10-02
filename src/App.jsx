import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import TaskBoard from "./Components/TaskBoard/TaskBoard";

function App() {
  return (
    <div className="w-[80%] mx-auto">
      <Header></Header>
      <div>
        <TaskBoard></TaskBoard>
      </div>
      <div>
       <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
