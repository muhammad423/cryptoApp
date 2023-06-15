import React, { createContext, useState } from 'react';

const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [isHidden, setIsHidden] = useState(false);

  const toggleNavbar = () => {
    setIsHidden(!isHidden);
  };

  const contextValue = {
    isHidden,
    toggleNavbar,
  };

  return <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>;
};

export default MyContext;