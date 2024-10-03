import ListOfTask from "./ListOfTask/ListOfTask";
import PerformTask from "./PerformTask/PerformTask";

export default function TaskGenaretor({ tasks, handleAddTask, onEdit, onDelete, onClearAll, onFav }) {
  return (
    <div className="w-full bg-rose-50 rounded-md min-h-[500px] p-10">
      <div className="mb-12">
        <PerformTask handleAddTask={handleAddTask} onClearAll={onClearAll}></PerformTask>
      </div>

      {tasks.length > 0 ? (
        <div>
          <ListOfTask tasks={tasks} onEdit={onEdit} onDelete={onDelete} onFav={onFav}></ListOfTask>
        </div>
      ) : (
        "Task not found"
      )}
    </div>
  );
}
