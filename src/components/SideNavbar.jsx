import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { BiNews } from "react-icons/bi";
import MyContext from "./MyContext";

const SideNavbar = () => {
  const { isHidden } = useContext(MyContext);

  return (
    <div
      className={`fixed top-16 left-0 w-64 h-screen bg-[#0f0f0f] text-white z-10 ${
        isHidden ? "hidden" : ""
      }`}
    >
      <nav className="flex flex-col items-start flex-grow py-4">
        <Link
          to="/"
          className="px-6 py-2 text-[18px] flex items-center gap-3 text-[#f9f9f9] hover:text-[#b1aeae] duration-300"
        >
          <span>
            <AiFillHome />
          </span>
          <p>Home</p>
        </Link>

        <Link
          to="/market"
          className="px-6 py-2 text-[18px] flex items-center gap-3 text-[#f9f9f9] hover:text-[#b1aeae] duration-300 "
        >
          <span>
            <BiNews />
          </span>
          <p className="">News</p>
        </Link>
      </nav>
    </div>
  );
};

export default SideNavbar;
