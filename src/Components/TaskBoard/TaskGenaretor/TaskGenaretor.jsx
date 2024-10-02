import PerformTask from "./PerformTask/PerformTask";
import TaskList from "./TaskList/TaskList";

export default function TaskGenaretor({ tasks }) {
  return (
    <div className="w-full bg-gray-200 rounded-md min-h-[500px] py-3 px-1 ">
      <div className="mb-5">
        <PerformTask></PerformTask>
      </div>
      <div>
        <TaskList tasks={tasks}></TaskList>
      </div>
    </div>
  );
}
