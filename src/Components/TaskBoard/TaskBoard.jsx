
import TaskGenaretor from "./TaskGenaretor/TaskGenaretor";

export default function TaskBoard() {
  return (
    <div className="grid grid-cols-3 gap-5">
      <div className="bg-gray-200 col-span-1">
        <h2>This is a task board</h2>
      </div>
      <div className="col-span-2">
        <TaskGenaretor></TaskGenaretor>
      </div>
    </div>
  );
}
