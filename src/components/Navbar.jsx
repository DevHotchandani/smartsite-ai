import React, { useEffect, useState } from 'react'
import { IoMdMoon } from "react-icons/io";
import { FaSun } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

const Navbar = () => {

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dark"
  );

  useEffect(() => {

  if (theme === "light") {
    document.body.classList.add("light");
  } else {
    document.body.classList.remove("light");
  }

  localStorage.setItem("theme", theme);

}, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <div className="nav flex items-center justify-between px-[120px] h-[70px]">
        
        <div className="logo">
          <h3 className='text-[25px] font-bold bg-gradient-to-br from-blue-400 to-cyan-600 bg-clip-text text-transparent'>
            SmartSite AI
          </h3>
        </div>

        <div className="icons flex items-center gap-[15px]">

          <i onClick={toggleTheme} className="icon">
            {
              theme === "dark"
                ? <FaSun />
                : <IoMdMoon />
            }
          </i>

          <i className="icon">
            <FaUser />
          </i>

        </div>

      </div>
    </>
  )
}

export default Navbar