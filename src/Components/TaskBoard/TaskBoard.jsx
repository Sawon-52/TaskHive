
import TaskGenaretor from "./TaskGenaretor/TaskGenaretor";

export default function TaskBoard({tasks, handleAddTask, onEdit,onDelete, onClearAll,onFav}) {
    
  return (
    <div className="grid lg:grid-cols-4 gap-5">
      <div className="bg-gray-200 col-span-1 rounded-md">
        <h2>This is a task board</h2>
      </div>
      <div className="col-span-3">
        <TaskGenaretor tasks={tasks} handleAddTask={handleAddTask} onEdit={onEdit} onDelete={onDelete} onClearAll={onClearAll} onFav={onFav}></TaskGenaretor>
      </div>
    </div>
  );
}
