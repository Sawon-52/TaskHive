import React from "react";

export default function TaskTableHead() {
  return (
    <tr className="text-gray-700 text-md ">
      <th></th>
      <th>Title</th>
      <th>Description</th>
      <th>Tags</th>
      <th>Priority</th>
      <th>Action</th>
    </tr>
  );
}
