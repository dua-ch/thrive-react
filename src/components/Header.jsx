import { useState } from "react";
import logo from "../assets/logo.png";
const Header = () => {
  const [showMenu, setshowMenu] = useState(false);
  return (
    <header>
      <nav className="flex items-center justify-between text-white font-fira py-6 ">
        <a href="/" className="font-bold text-2xl leading-none text-[#2FAFB2]" style={{maxWidth:'200px'}}>
          <img src={logo} alt="" />
        </a>
        <ul
          className={`${
            showMenu ? "translate-x-0" : "translate-x-full lg:translate-x-0"
          } flex flex-col lg:flex-row justify-center lg:justify-start space-y-4 lg:space-y-0 items-center lg:space-x-8 bg-black lg:bg-transparent z-30 fixed lg:relative top-0 right-0 w-64 lg:w-auto h-full lg:h-auto transition-all ease-in-out duration-300`}
        >
          <li>
            <a href="/" className="font-normal hover:opacity-60">
              ABOUT
            </a>
          </li>
          <li>
            <a href="/" className="font-normal hover:opacity-60">
              TEAM
            </a>
          </li>
          <li>
            <a href="/" className="font-normal hover:opacity-60">
              ECOSYSTEM
            </a>
          </li>
          <li>
            <a href="/" className="font-normal hover:opacity-60">
              ROADMAP
            </a>
          </li>
          <li>
            <a href="/" className="font-normal hover:opacity-60">
              MILESTONES
            </a>
          </li>
          <li>
            <a href="/" className="font-normal hover:opacity-60">
              PHILOSOPHY
            </a>
          </li>
          <li>
            <a href="/" className="font-normal hover:opacity-60">
              FAQ
            </a>
          </li>
          <li>
            <a href="/" className="font-normal hover:opacity-60">
              DOCS
            </a>
          </li>
          <li>
            <a href="/" className="font-normal hover:opacity-60">
              CONTACTS
            </a>
          </li>
          <li>
            <a href="/" className="font-normal hover:opacity-60 flex items-center">
              <img src="/user-icon.png" alt="user-icon.png" className="mr-1" />
              LOGIN
            </a>
          </li>
        </ul>
        <button
          className="text-[#dfdfdf] relative z-50 bg-gray-500/20 rounded-full h-11 w-11 flex lg:hidden items-center justify-center"
          onClick={() => setshowMenu(!showMenu)}
        >
          {showMenu ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </nav>
    </header>
  );
};

export default Header;
