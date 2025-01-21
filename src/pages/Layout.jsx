import { Outlet } from "react-router-dom";
import Header from "../components/Header.jsx";
import { useState } from "react";
import { Context } from "../context/Context.js";

const Layout = () => {
     const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem("isDarkMode")))
     return (
          <>
               <Context.Provider value={{isDark, setIsDark}}>
                    <Header/>
                    <Outlet/>
               </Context.Provider>
          </>
     );
};

export default Layout;