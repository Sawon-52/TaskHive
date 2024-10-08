import TaskTableHead from "../TaskTableHead/TaskTableHead";

export default function ListOfTask({ tasks, onEdit, onDelete, onFav }) {
  return (
    <div>
      <table className="table">
        <thead>
          <TaskTableHead></TaskTableHead>
        </thead>

        {tasks.map((task, index) => (
          <tbody key={index}>
            <tr className="hover:bg-white bg-blue-50">
              <th>
                <button onClick={() => onFav(task.id)}>
                  <div className="rating gap-1 flex items-center">{task.isFavorite ? <input type="radio" name="rating-3" className="mask mask-heart bg-rose-400 w-4" defaultChecked /> : <input type="radio" name="rating-3" className="mask mask-heart bg-rose-200 w-4" defaultChecked />}</div>
                </button>
              </th>
              <td>{task.title}</td>
              <td>{task.description} </td>

              <td className="flex gap-2 flex-wrap">
                {task.tags.map((tag, index) => (
                  <div key={index}>
                    <div className="badge badge-secondary">{tag}</div>
                  </div>
                ))}
              </td>

              <td>{task.priority}</td>

              <td>
                <div className="flex gap-4">
                  <button className="text-red-500 text-md font-semibold" onClick={() => onDelete(task.id)}>
                    Delete
                  </button>
                  <button className="text-blue-500 text-md font-semibold" onClick={() => onEdit(task)}>
                    Edit
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}
