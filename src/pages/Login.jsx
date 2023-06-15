import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div className="bg-main">
      <div className="bgStyle">
        <div className="w-[100%] h-[100%] flex items-center justify-center">
          <div className="flex items-center justify-center flex-col gap-5 w-[60%]">
            <h1 className="md:text-6xl text-3xl font-bold uppercase text-[#080807e8]">
              Cryptocurrency
            </h1>
            <p className=" md:w-[50%] text-center font-semibold md:text-lg text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              quas nesciunt facere quam temporibus illo!
            </p>
            <div className="w-80">
              <button
                className="bg-black w-[100%] py-4 px-5 text-xl font-semibold text-[#f9f9f9] uppercase cursor-pointer rounded-lg hover:bg-[#11100ce8] duration-300"
                onClick={() => loginWithRedirect()}
              >
                About bitCoin
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
