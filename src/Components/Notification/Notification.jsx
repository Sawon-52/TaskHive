import { IoMdNotificationsOutline } from "react-icons/io";

export default function Notification() {
  return (
    <div className="indicator">
      <span className="indicator-item badge badge-primary">9+</span>
      <button className="p-2">{<IoMdNotificationsOutline className="text-2xl bg-gray-200 w-10 h-10 p-2 rounded-full" />}</button>
    </div>
  );
}
