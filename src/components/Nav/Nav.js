import React from "react";
import { Link, NavLink } from "react-router-dom";
const Nav = ({ display, setDisplay }) => {
  const displayHandler = () => {
    if (setDisplay) {
      setDisplay(!display);
    }
  };

  return (
    // <BrowserRouter>
    <nav
      className="flex items-stretch bg-[rgba(255,255,255,.98)]
     bottom-0 shadow-[0_-1px_2px_0_rgba(0,0,0,.12)]
     h-[56px] left-0 w-[100%] z-50 fixed
     "
    >
      <NavLink to="/" className="navItem sm:flex-row whitespace-break-spaces">
        <label className="text-[#cf9816] text-[15px] font-[800]  hidden md:block text-right">
          دیوار اهواز
        </label>
        <span className="text-[#db6666]  px-[10px] font-[600] md:text-[17px] text-[15px] text-center">
          آگهی ها
        </span>
      </NavLink>

      <NavLink
        to="/cat"
        className="navItem md:flex-row font-[600] text-[17px] text-[#db6666]"
        onClick={displayHandler}
      >
        دسته ها
        <span className="pt-[10px] md:pt-0">
          <img
            className="text-[1.5rem] ml-[8px] w-[20px] h-[20px]"
            src="/static/images/menu-svgrepo-com2.svg"
            alt="دسته بندی ها"
          />
        </span>
      </NavLink>

      <Link
        to="/add"
        className="navItem md:flex-row font-[600] text-[17px] text-[#db6666] addad"
      >
        ثبت آگهی
        <span className="pt-[10px] md:pt-0">
          <img
            className="text-[1.5rem] ml-[8px] w-[20px] h-[20px]"
            src="/static/images/plus-circle-svgrepo-com.svg"
            alt="ثبت آگهی"
          />
        </span>
      </Link>

      <NavLink
        to="/chat"
        className="navItem md:flex-row font-[600] text-[17px] text-[#db6666]"
      >
        چت
        <span className="pt-[10px] md:pt-0">
          <img
            className="text-[1.5rem] ml-[8px] w-[20px] h-[20px]"
            src="/static/images/chat-svgrepo-com.svg"
            alt="چت"
          />
        </span>
      </NavLink>

      <Link
        to="/my"
        className="navItem md:flex-row font-[600] text-[17px] text-[#db6666]"
      >
        دیوار من
        <span className="pt-[10px] md:pt-0">
          <img
            className="text-[1.5rem] ml-[8px] w-[20px] h-[20px]"
            src="/static/images/user-rounded-svgrepo-com.svg"
            alt="دیوار من"
          />
        </span>
      </Link>
    </nav>
    // </BrowserRouter>
  );
};

export default Nav;
