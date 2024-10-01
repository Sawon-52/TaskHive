import Notification from "../Notification/Notification";
import Logo from "./Logo/Logo";
import Profile from "./Profile/Profile";
import Search from "./Search/Search";
import ThemeToggle from "./ThemeToggle/ThemeToggle";

export default function Header() {
  return (
    <div className="w-[90%] mx-auto flex items-center justify-between py-4">
      <Logo></Logo>
      <Search></Search>
      <ThemeToggle></ThemeToggle>
      <Notification></Notification>
      <Profile></Profile>
    </div>
  );
}
