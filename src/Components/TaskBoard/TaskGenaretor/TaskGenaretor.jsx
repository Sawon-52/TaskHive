import ListOfTask from "./ListOfTask/ListOfTask";
import PerformTask from "./PerformTask/PerformTask";

export default function TaskGenaretor({ tasks, handleAddTask, onEdit,onDelete,onClearAll,onFav }) {
  return(
    <div className="w-full bg-gray-200 rounded-md min-h-[500px] py-3 px-1 ">
      <div className="mb-5">
        <PerformTask handleAddTask={handleAddTask} onClearAll={onClearAll}></PerformTask>
      </div>
      <div>
        <ListOfTask tasks={tasks} onEdit={onEdit} onDelete={onDelete} onFav={onFav}></ListOfTask>
      </div>
    </div>
  );
}
