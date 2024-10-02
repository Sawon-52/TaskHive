import { IoMdNotificationsOutline } from "react-icons/io";

export default function Notification() {
  return (
    <div className="indicator">
      <span className="indicator-item badge bg-rose-400 text-white">9+</span>
      <button className="p-2">{<IoMdNotificationsOutline className="text-2xl bg-gray-600 w-10 h-10 p-2 rounded-full text-white" />}</button>
    </div>
  );
}
