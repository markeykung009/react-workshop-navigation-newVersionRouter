import React, { useState } from "react";

import { FaBars, FaWindowClose } from "react-icons/fa";

import MenuData from "../data/MenuData";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <aside>
      <div className="flex h-[48px] justify-start items-center">
        <div className="bg-[#121312] w-full h-[80px] flex justify-start items-center">
          <div className="text-[2rem] ml-[2rem]">
            <FaBars
              className="no-underline text-white text-[1.5rem] w-[95%] h-[100%] flex items-center px-[16px] rounded-md cursor-pointer"
              onClick={toggleMenu}
            />
          </div>
        </div>
      </div>
      <nav
        className={
          showMenu
            ? "bg-[#121312] w-[250px] h-[100vh] flex justify-center fixed top-0 left-[-100%] transition-[350ms] active"
            : "bg-[#121312] w-[250px] h-[100vh] flex justify-center fixed top-0 left-[-100%] transition-[350ms]"
        }
      >
        <ul className="w-[100%]" onClick={toggleMenu}>
          <li className="bg-[#121312] w-full h-[80px] flex justify-start items-center">
            <div className="text-[2rem] ml-[2rem]">
              <FaWindowClose className="no-underline text-white text-[1.5rem] w-[95%] h-[100%] flex items-center px-[16px] rounded-md cursor-pointer" />
            </div>
          </li>
          {MenuData.map((el, idx) => (
            <li
              className="flex justify-start items-center pt-[8px] pr-[0px] pb-[8px] pl-[16px] h-[60px] list-none "
              key={idx}
            >
              <Link
                to={el.path}
                className="no-underline text-white text-[18px] w-[95%] h-[100%] flex items-center px-[16px] rounded-md hover:bg-orange-500"
              >
                {el.Icon}
                <span className="ml-[16px]">{el.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Navigation;
