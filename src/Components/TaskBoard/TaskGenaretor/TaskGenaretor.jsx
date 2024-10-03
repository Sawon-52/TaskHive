import ListOfTask from "./ListOfTask/ListOfTask";
import PerformTask from "./PerformTask/PerformTask";

export default function TaskGenaretor({ tasks, handleAddTask, onEdit,onDelete }) {
  return(
    <div className="w-full bg-gray-200 rounded-md min-h-[500px] py-3 px-1 ">
      <div className="mb-5">
        <PerformTask handleAddTask={handleAddTask}></PerformTask>
      </div>
      <div>
        <ListOfTask tasks={tasks} onEdit={onEdit} onDelete={onDelete}></ListOfTask>
      </div>
    </div>
  );
}
