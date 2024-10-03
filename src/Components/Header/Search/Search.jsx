import { useState } from "react";

export default function Search({ onSearch }) {
  const [searchItems, setSearchItems] = useState("");
  function handleClick() {
    onSearch(searchItems);
    setSearchItems("");
  }

  return (
    <div className="join">
      <div>
        <div>
          <input className="max-w-[400px] input input-bordered join-item outline-none rounded-2xl h-10" placeholder="Search" value={searchItems} onChange={(e) => setSearchItems(e.target.value)} />
        </div>
      </div>
      <div className="h-10" onClick={handleClick}>
        <button className="p-2 bg-gray-600 text-white rounded-r-2xl text-sm h-full">Search</button>
      </div>
    </div>
  );
}
