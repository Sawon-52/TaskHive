import Notification from "./Notification/Notification";
import Logo from "./Logo/Logo";
import Profile from "./Profile/Profile";
import Search from "./Search/Search";
import ThemeToggle from "./ThemeToggle/ThemeToggle";

export default function Header() {
  return (
    <div>
      <div className="navbar py-6">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu-md dropdown-content bg-base-100 rounded-box z-[1] mt-3 max-w-[400px] p-2 px-4 shadow focus:bg-none ">
              <li>
                <Search></Search>
              </li>
              <li></li>
              <li>
                <Profile></Profile>
              </li>
            </ul>
          </div>
          <a>
            <Logo></Logo>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex items-center ">
          <ul className="menu-horizontal px-1 flex items-center gap-5">
            <li>
              <Search></Search>
            </li>
            <li>
              <ThemeToggle></ThemeToggle>
            </li>
            <li>
              <Notification></Notification>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className=" hidden md:block">
            <Profile></Profile>
          </div>
        </div>
      </div>
    </div>
  );
}
