export default function Search() {
  return (
    <div className="join">
      <div>
        <div>
          <input className="input input-bordered join-item outline-none rounded-2xl h-10" placeholder="Search" />
        </div>
      </div>
      <div className="h-10">
        <button className="p-2 bg-gray-600 text-white rounded-r-2xl text-sm h-full">Search</button>
      </div>
    </div>
  );
}
