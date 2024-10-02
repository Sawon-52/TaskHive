import React from "react";
import { RxCross2 } from "react-icons/rx";

export default function AddTaskModal({ handleModal }) {
  return (
    <>
      <div className="bg-black bg-opacity-70 w-full h-full z-10 absolute top-0 left-0"></div>
      <div className="card bg-base-300 w-full max-w-96 shadow-xl space-y-6 p-4 absolute lg:my-20 lg:p-11 mx-auto my-10 z-10 topo-1/4 left-1/3 ">
        <div className="absolute right-6 top-5 cursor-pointer" onClick={() => handleModal()}>
          <RxCross2 className="text-xl font-bold " />
        </div>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-tex font-semibold">Title</span>
          </div>
          <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text font-semibold">Description</span>
          </div>
          <textarea placeholder="Type here" className="textarea textarea-bordered textarea-md w-full max-w-xs"></textarea>
        </label>

        <div className="flex gap-5 justify-between">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text font-semibold">Tags</span>
            </div>
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-sm" />
          </label>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text font-semibold">Priority</span>
            </div>
            <select className="select select-bordered w-full max-w-xs">
              <option disabled selected>
                Select Priority
              </option>
              <option>High</option>
              <option>Low</option>
            </select>
          </label>
        </div>

        <div className="flex justify-center">
          <button className="btn btn-active btn-primary">Create New Task</button>
        </div>
      </div>
    </>
  );
}
