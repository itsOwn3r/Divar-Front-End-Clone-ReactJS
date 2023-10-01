import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
const Header = () => {
  const [search, setSearch] = useState("")
  const navigate = useNavigate()

  const submitHandler = (e) => {
    if (search === "") {
      e.preventDefault();
      return;
    }
    return navigate(`/s/${search}`)
  }
  return (
    <header className="flex px-[16px] bg-[#fff] items-center shadow-[0_1px_2px_0_rgba(0,0,0,.12)] h-[64px] sticky top-0 w-[100%] z-[51]">
      <nav className="flex items-center flex-1">
        <form className=" flex items-center bg-[rgba(0,0,0,.04)] rounded-[4px] grow" onSubmit={submitHandler}>
        <Link to={"/"} className="flex w-[2.5rem] mr-[10px]">
        <img className="w-[30] h-[30px]" src="/static/images/home-4-svgrepo-com.svg" alt="صفحه اصلی" /></Link>
            <div className="relative w-auto h-[2.5rem] flex-1">
                <input type="search" onChange={e => setSearch(e.target.value)} className="pr-[40px] pl-[16px] absolute h-[2.5rem] leading-[2.5rem] bg-transparent truncate border-[rgba(0,0,0,0%)] border-[1px] border-solid box-border rounded-[4px] text-[#000000de] shadow-none text-[1rem] outline-none w-[100%]" placeholder="جستجو در همه آگهی ها" autoComplete="off" id="search" />
                <div className="icon h-[2.5rem] leading-[2.5rem] absolute text-[rgba(0,0,0,.32)] px-[8px] right-0">
                <button type="submit"><img className="text-[1.5rem] h-[24px] w-[24px] inline-block" src="/static/images/search.svg" alt="جستجو" /></button>
                </div>
            </div>
            <hr className="mx-[4px] inline-block h-[1.5rem] w-[2px] border-none box-border bg-[rgba(0,0,0,.12)]"/>
            <button className="bg-transparent border-none text-[rgba(0,0,0,.56)] cursor-pointer outline-none p-[0_8px_0_8px] text-[20px] font-[700]" type="button">
            اهواز
            <img className="inline-block mr-[5px] w-[20px] h-[20px]"
                  src="/static/images/location-svgrepo-com.svg"
                  alt="صفحه اصلی"
                />
            </button>
        </form>
      </nav>
    </header>
  );
};

export default Header;
