import PerformTask from "./PerformTask/PerformTask";

export default function TaskGenaretor() {
  return (
    <div className="w-full bg-gray-200 rounded-md min-h-[500px] py-3 px-1 ">
      <div className="mb-5">
        <PerformTask></PerformTask>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Title</th>
                <th>Description</th>
                <th>Tags</th>
                <th>Priority</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr className="hover">
                <th>
                  <div className="rating gap-1 flex items-center">
                    <input type="radio" name="rating-3" className="mask mask-heart bg-rose-400 w-4" defaultChecked />
                  </div>
                </th>

                <td>Cy Ganderton</td>
                <td>Quality Control Specialist </td>

                <td>
                  <div className="flex gap-2 flex-wrap">
                    <div className="badge badge-primary">primary</div>
                    <div className="badge badge-secondary">secondary</div>
                    <div className="badge badge-accent">accent</div>
                  </div>
                </td>

                <td>High</td>

                <td>
                  <div className="flex gap-2">
                    <button className="text-red-500 text-md font-semibold">Delete</button>
                    <button className="text-blue-500 text-md font-semibold">Edit</button>
                  </div>
                </td>
              </tr>
              <tr className="hover">
                <th>
                  <div className="rating gap-1 flex items-center">
                    <input type="radio" name="rating-3" className="mask mask-heart bg-rose-400 w-4" defaultChecked />
                  </div>
                </th>

                <td>Cy Ganderton</td>
                <td>Quality Control Specialist </td>

                <td>
                  <div className="flex gap-2 flex-wrap">
                    <div className="badge badge-primary">primary</div>
                    <div className="badge badge-secondary">secondary</div>
                    <div className="badge badge-accent">accent</div>
                  </div>
                </td>

                <td>High</td>

                <td>
                  <div className="flex gap-2">
                    <button className="text-red-500 text-md font-semibold">Delete</button>
                    <button className="text-blue-500 text-md font-semibold">Edit</button>
                  </div>
                </td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
