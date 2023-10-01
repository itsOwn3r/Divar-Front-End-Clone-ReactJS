import React from 'react'
import HeaderOfAds from '../../Header/HeaderOfAds'
import Main from '../../Main/Main'
import Backdrop from '../../Backdrop/Backdrop'
import { useNavigate } from "react-router-dom";
const Posts = () => {
  const navigate = useNavigate()
  const userIsLoggedIn = document.cookie.includes("token") && document.cookie.includes("phone") && localStorage.getItem("phone") !== null
  return (
     <>
    <HeaderOfAds />
    
    {userIsLoggedIn ? <Main /> :
    <Backdrop>
        <div className='flex items-center justify-center text-[1.2rem] h-[100%] flex-col text-[#fff]'>
       <span> برای ارسال آگهی، باید وارد حساب کاربری خود شوید.</span>
        
      <button className='mt-[30px] cursor-pointer bg-[#146ba9] p-[15px] rounded-[10px] text-[#fff] text-[1rem] hover:bg-[#477697] hover:text-[#ecb7b7]' onClick={() => navigate("/login")}>ورود به حساب</button>
        </div>
      </Backdrop>}
    </>
  )
}

export default Posts