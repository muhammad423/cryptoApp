import React from "react";
import { useContext } from "react";
import logo from "../assets/bybit-seeklogo.com.svg";
import { useNavigate } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import EmailOptions from "./EmailOptions"
import MyContext from "./MyContext";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const { toggleNavbar, isHidden } = useContext(MyContext);
  const navigate = useNavigate();

  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();
  console.log(user, "user");

  return (
    <div className="bg-[#000] text-[#f9f9f9] w-full fixed top-0 left-0 md:px-10 px-2 z-10">
      <div className="flex justify-between items-center mx-auto h-16">
        <div className="cursor-pointer flex items-center gap-20">
          <img
            src={logo}
            alt=""
            className="w-[70px] h-[70px]"
            onClick={() => navigate("/")}
          />
          {isAuthenticated && (
            <div onClick={toggleNavbar} className="md:hidden">
               <BiMenuAltRight/>
            </div>
          )}
        </div>
        {isAuthenticated ? (
          <div>
           <EmailOptions />
          </div>
        ) : (
          <div>
            <button
              className="md:text-xl text-lg bg-[#7AA93C] px-5 py-2 rounded-sm  hover:border hover:bg-transparent duration-300"
              onClick={() => loginWithRedirect()}
            >
              LOGIN
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
