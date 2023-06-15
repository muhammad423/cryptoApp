import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { AiFillSetting, AiOutlineLogout } from "react-icons/ai";
import { FcPrivacy } from "react-icons/fc";

const EmailOptions = () => {
  const { user, logout } = useAuth0();
  const [showOptions, setShowOptions] = useState(false);

  const handleOptionsToggle = () => {
    setShowOptions(!showOptions);
  };

  return (
    <div className="relative w-[40px] h-[40px] ">
      <img
        src={user?.picture}
        alt="Email"
        className="cursor-pointer rounded-full"
        onClick={handleOptionsToggle}
      />

      {showOptions && (
        <div className="absolute right-0 mt-2 bg-white text-black w-48 p-4 shadow-lg rounded-md">
          <ul className="space-y-2">
            <li className="flex items-center gap-3 hover:text-gray-700">
              <span>
                <AiFillSetting />
              </span>
              <button className="block w-full text-left">Settings</button>
            </li>
            <li className="flex items-center gap-3 hover:text-gray-700">
              <span>
                <FcPrivacy />
              </span>
              <button className="block w-full text-left">Privacy</button>
            </li>
            <li
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
              className="flex items-center gap-3 hover:text-gray-700"
            >
              <span>
                <AiOutlineLogout />
              </span>
              <button className="block w-full text-left">Logout</button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default EmailOptions;
