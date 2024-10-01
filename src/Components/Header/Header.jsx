import Notification from "../Notification/Notification";
import Logo from "./Logo/Logo";
import Profile from "./Profile/Profile";
import Search from "./Search/Search";
import ThemeToggle from "./ThemeToggle/ThemeToggle";

export default function Header() {
  return (
    <div className="w-[80%] mx-auto flex items-center justify-between py-4">
      <Logo></Logo>
      <div className="mt-1">
        <Search></Search>
      </div>
      <div className="flex gap-5 mt-1">
        <ThemeToggle></ThemeToggle>
        <Notification></Notification>
      </div>
      <Profile></Profile>
    </div>
  );
}
