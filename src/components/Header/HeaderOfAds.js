import React from "react";
import { useNavigate } from "react-router-dom";

const HeaderOfAds = ({showShare, nameInChat}) => {
    const navigate = useNavigate()
    const goBackHandler = () => {
        return navigate(-1);
    }


    const copyLink = async () => {
      try {
        const url = window.location.href;
        await navigator.clipboard.writeText(url);
       document.querySelector("#copy").style =  "background-color: #2c8d1a9c";
        setTimeout(() => {
            document.querySelector("#copy").style = "";
        }, 4000);
      } catch (err) {
        console.error(err)
      }
    }

  return (
    <header className="flex px-[16px] bg-[#fff] items-center shadow-[0_1px_2px_0_rgba(0,0,0,.12)] h-[64px] sticky top-0 w-[100%] z-[51]">
      <nav className="flex items-center flex-1">
      <button className='rounded-[50%] h-[2.5rem] w-[2.5rem] min-w-[auto] p-0 bg-transparent text-[rgba(0,0,0,.56)] inline-flex items-center border-solid border-[1px] border-transparent box-border cursor-pointer text-[1.3rem] font-[800] justify-center leading-normal outline-none overflow-hidden relative hover:bg-[rgba(0,0,0,.04)]' onClick={goBackHandler}>
      <img className="w-[20px] h-[20px]" src="/static/images/right-arrow-svgrepo-com.svg" alt="برگشت" />
      </button>
      {nameInChat && <div className="mr-[1rem]">{nameInChat}</div>}
      </nav>

      {showShare !== false && <nav className="flex items-center mr-[8px] flex-row-reverse">
      <button onClick={() => copyLink()} id="copy" className='rounded-[50%] h-[2.5rem] w-[2.5rem] min-w-[auto] p-0 bg-transparent text-[rgba(0,0,0,.56)] inline-flex items-center border-solid border-[1px] border-transparent box-border cursor-pointer text-[1.3rem] font-[800] justify-center leading-normal outline-none overflow-hidden relative hover:bg-[rgba(0,0,0,.04)]'>
      <img className="w-[24px] h-[24px]" src="/static/images/share-svgrepo-com.svg" alt="خطای اینترنت" />
      </button>
      </nav>}
    </header>
  );
};

export default HeaderOfAds;
