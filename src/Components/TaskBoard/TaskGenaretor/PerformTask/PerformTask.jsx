export default function PerformTask({ handleAddTask }) {
  return (
    <div className="flex justify-between items-center">
      <h2 className="text-2xl font-semibold text-gray-700">Task board</h2>
      <div className="flex gap-5">
        <button className="btn btn-outline btn-success " onClick={handleAddTask}>
          New Task +{" "}
        </button>
        <button className="btn btn-outline btn-error">Clear All</button>
      </div>
    </div>
  );
}
