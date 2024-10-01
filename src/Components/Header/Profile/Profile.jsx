import React from "react";

export default function Profile() {
  return (
    <div className="flex items-center gap-3">
      <div className="avatar online placeholder">
        <div className="bg-neutral text-neutral-content w-12 rounded-full">
          <span className="text-xl">Me</span>
        </div>
      </div>
      <div>
        <h2 className="text-md font-semibold text-gray-1000">Mehedi Hasan</h2>
        <h3 className="text-sm text-gray-400 ">Web Developer</h3>
      </div>
    </div>
  );
}
